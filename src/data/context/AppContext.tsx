import { createContext, useEffect, useState } from "react";

// type Tema = "dark" | "";

interface AppContexProps {
  tema?: string;
  alternarTema?: () => void;
}
const AppContext = createContext<AppContexProps>({});

export function AppProvider(props: any) {
  const [tema, setTema] = useState<any>("dark");

  function alternarTema() {
    const novoTema = tema === "dark" ? "" : "dark";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    setTema(temaSalvo);
  }, []);

  return (
    <AppContext.Provider value={{ tema, alternarTema }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
