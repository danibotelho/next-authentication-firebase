import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import firebase from "../../firebase/config";
import User from "@/model/User";
import route from "next/router";

interface AuthContextProps {
  user?: User | null;
  loginGoogle?: () => Promise<void>;
}
const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFirebase: firebase.User
): Promise<User> {
  const token = await usuarioFirebase.getIdToken();
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0]?.providerId,
    imagemUrl: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set("admin-template-auth", logado, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

export function AuthProvider(props: any) {
  const [carregando, setCarregando] = useState(true);
  const [user, setUser] = useState<User | null>();

  async function configurarSessao(usuarioFirebase: firebase.User | null) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUser(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUser(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configurarSessao(resp.user);
      route.push("/");
    } finally {
      setCarregando(false);
    }
  }
  useEffect(() => {
    const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
    return () => cancelar();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
