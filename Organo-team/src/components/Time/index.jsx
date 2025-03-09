import "./Time.css";
import React from "react";

const Time = (props) => {
  const css = { background: props.corSecundaria };

  return (
    <section className="time" style={css}>
      <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Time;
