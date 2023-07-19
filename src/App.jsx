import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const initialArray = JSON.parse(localStorage.getItem("pacientes")) || [];

function App() {
  const [pacientes, setPacientes] = useState(initialArray);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])

  const deletePaciente = (id) => {
    const pacientesActualizados = pacientes.filter((item) => item.id !== id);

    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePaciente={deletePaciente}
        />
      </div>
    </div>
  );
}

export default App;
