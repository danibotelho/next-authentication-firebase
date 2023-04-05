import useAuth from "@/data/hook/useAuth";
import { IconeAjustes, IconeInicio, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {

  const {logout} = useAuth()

  return (
    <>
      <aside
        className={`flex flex-col bg-gray-200 text-gray-900 dark:bg-gray-700`}
      >
        <div
          className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
        >
          <Logo />
        </div>
        <ul className={`flex-grow`}>
          <MenuItem url={"/"} texto={"Inicio"} icone={IconeInicio} />
          <MenuItem
            url={"/notificacoes"}
            texto={"Notificações"}
            icone={IconeSino}
          />
          <MenuItem url={"/ajustes"} texto={"Ajustes"} icone={IconeAjustes} />
        </ul>
        <ul>
          <MenuItem
            texto={"Sair"}
            icone={IconeSair}
            onClick={logout}
            className={`text-red-600                       
                        hover:bg-red-400
                        hover:text-white
                        dark:text-red-400
                        dark:hover:text-white 
                        `}
          />
        </ul>
      </aside>
    </>
  );
}
