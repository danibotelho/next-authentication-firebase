import Titulo from "./Titulo";

interface TopBarProps {
  titulo: string;
  subtitulo: string;
}

export default function TopBar(props: TopBarProps) {
  return (
    <>
      <div>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
      </div>
    </>
  );
}
