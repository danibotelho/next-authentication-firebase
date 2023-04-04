import AuthInput from "@/components/auth/AuthInput";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.svg";
import { IconeAtencao } from "@/components/icons";

export default function Autenticacao() {
  
    const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);

  function handleSubmit() {
    if (modo === "login") {
      console.log("login");
      exibirErro("Ocorreu um erro no login", 2);
    } else {
      console.log("cadastrar");
      exibirErro("Ocorreu um erro no cadastro",2 );
    }
  }

  function exibirErro(msg: any, tempoEmSegundos: number ) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  return (
    <div className={`flex flex-col h-screen items-center justify-center `}>
      <div
        className={`bg-gray-100 px-8 py-8 rounded-lg md:block md:w-1/2 selection:sm:h-1/8 lg:w-1/3`}
      >
        <div className={`mb-12`}>
          <Image
            src={logo}
            alt="imagem emerge"
            priority
            width={300}
            height={500}
          />
        </div>
        <div>
          <h1 className={`text-xl font-bold mb-5`}>
            {modo === "login" ? "Entre com a sua conta" : " Cadastre sua conta"}
          </h1>
          {erro ? (
            <div className=" flex items-center bg-red-400 text-white py-3 px-5 my-2 border rounded-lg ">
              {IconeAtencao()}
              <span className={`ml-3`}> {erro} </span>
            </div>
          ) : (
            ""
          )}

          <AuthInput
            label={"Email"}
            valor={email}
            valorMudou={setEmail}
            tipo={"email"}
            obrigatorio
          />
          <AuthInput
            label={"Senha"}
            valor={senha}
            valorMudou={setSenha}
            tipo={"password"}
            obrigatorio
          />
          <button
            onClick={handleSubmit}
            className={`w-full bg-green-500
       hover:bg-green-400 text-white rounded-lg px-4 py-3 mt-6  `}
          >
            {modo === "login" ? "Entrar" : " Cadastrar"}
          </button>
          <hr className={`my-6 border-gray-300 w-full`} />
          <button
            onClick={handleSubmit}
            className={`w-full bg-red-500
       hover:bg-red-400 text-white rounded-lg px-4 py-3 `}
          >
            Entrar com Google
          </button>
          {modo === "login" ? (
            <p className="mt-8">
              Novo por aqui?
              <a
                onClick={() => setModo("cadastro")}
                className={`
                            text-green-500 hover:text-green-700 font-semibold
                            cursor-pointer
                        `}
              >
                Crie um Conta Gratuitamente
              </a>
            </p>
          ) : (
            <p className="mt-8">
              Já faz parte da nossa comunidade?
              <a
                onClick={() => setModo("login")}
                className={`
                            text-green-500 hover:text-green-700 font-semibold
                            cursor-pointer
                        `}
              >
                Entre com a suas Credenciais
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
