import useAppData from "@/data/hook/useAppData";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";
import AvatarUsuario from "./AvatarUsuário";

interface TopBarProps {
  titulo: string;
  subtitulo: string;
}

export default function TopBar(props: TopBarProps) {
  //usando context
  const { tema, alternarTema } = useAppData();
  
  return (
    <>
      <div className={`flex `}>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        <div className={`flex flex-grow justify-end items-center `}>
          <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
          <AvatarUsuario />
        </div>
      </div>
    </>
  );
}
