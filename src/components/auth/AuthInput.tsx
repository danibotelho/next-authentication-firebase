interface AuthInputProps {
  label: string;
  valor: any;
  obrigatorio?: boolean;
  naoRenderizarQuando?: boolean;
  tipo: "text" | "email" | "password";
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.naoRenderizarQuando ? null : (
    <div className={`flex flex-col mt-4`}>
      <label>{props.label}</label>

      <input
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 
      border focus:border-green-500 focus:outline-none focus:bg-white `}
        type={props.tipo}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
      ></input>
    </div>
  );
}
