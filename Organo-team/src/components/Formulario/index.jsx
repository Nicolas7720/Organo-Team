import React from "react";
import "./Formulario.css";
import { CampoTexto } from "../CampoTexto";

const itensForm = [
    {"label":"Nome", "placeholder":"Digite seu nome"},
    {"label":"Cargo", "placeholder":"Digite seu cargo"},
    {"label":"Imagem", "placeholder":"Digite o endereço da imagem" },
]

export const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        {itensForm.map((item) => {
            return(
                <CampoTexto label={item.label} placeholder={item.placeholder}/>
            )
        })}
      </form>
    </section>
  );
};
