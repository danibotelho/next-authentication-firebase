import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/model/User";
import route from "next/router";

interface AuthContextProps {
  user?: User;
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

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User>();

  async function loginGoogle() {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (resp.user?.email) {
        const usuario = await usuarioNormalizado(resp.user);
        setUser(usuario);
        route.push("/");
    }
  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
