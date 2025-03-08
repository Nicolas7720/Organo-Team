import "./CampoTexto.css";

export const CampoTexto = (props) => {
  // const placeholderModificado = `${props.placeholder}:`

  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        type="text"
        placeholder={`${props.placeholder}:`}
      />
    </div>
  );
};
