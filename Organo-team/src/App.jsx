import { useState } from "react";
import Banner from "./components/banner";
import { Formulario } from "./components/Formulario";
import Time from "./components/Time";

function App() {
  const times = [
    { nome: "Programação", corPrimaria: "#57c278", corSecundaria: "#d9f7e9" },
    { nome: "Front-End", corPrimaria: "#82cffa", corSecundaria: "#ebfbff" },
    { nome: "Data Science", corPrimaria: "#a6d157", corSecundaria: "#f0fbe2" },
    { nome: "Devops", corPrimaria: "#ed6b69", corSecundaria: "#fde7e8" },
    { nome: "UX e Design", corPrimaria: "#db6ebf", corSecundaria: "#fae9f5" },
    { nome: "Mobile", corPrimaria: "#ffba05", corSecundaria: "#fff5d9" },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />
      ))}
    </div>
  );
}

export default App;
