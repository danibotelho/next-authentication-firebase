import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";
import TopBar from "./TopBar";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`dark flex h-screen w-screen`}>
      <MenuLateral />
      <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800 `}>
        <TopBar titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>Condeúdo!!!</Conteudo>
      </div>
    </div>
  );
}
