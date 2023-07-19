import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Construir objeto
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      // Editando paciente
      objetoPaciente.id = paciente.id;
      const pacienteActualizado = pacientes.map((item) =>
        item.id === paciente.id ? objetoPaciente : item
      );

      setPacientes(pacienteActualizado);
      setPaciente({}); // Agregando objeto vacío al paciente
    } else {
      // Agregando nuevo paciente

      //Agregando id al nuevo paciente
      objetoPaciente.id = generarId();
      // Agregar nuevo paciente al array
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && <Error mensaje={"Todos los campos son requeridos"} />}
        <label
          className="block uppercase font-bold text-gray-700"
          htmlFor="mascota"
        >
          nombre mascota
        </label>
        <input
          type="text"
          placeholder="Nombre de mascota"
          className="w-full placeholder-gray-400 shadow-md border-2 mt-2 p-2 rounded-md"
          id="mascota"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label
          className="block uppercase font-bold text-gray-700 mt-5"
          htmlFor="propietario"
        >
          nombre propietario
        </label>
        <input
          type="text"
          placeholder="Nombre del propietario"
          className="w-full placeholder-gray-400 shadow-md border-2 mt-2 p-2 rounded-md"
          id="propietario"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />
        <label
          className="block uppercase font-bold text-gray-700 mt-5"
          htmlFor="email"
        >
          email propietario
        </label>
        <input
          type="email"
          placeholder="Email del propietario"
          className="w-full placeholder-gray-400 shadow-md border-2 mt-2 p-2 rounded-md"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          className="block uppercase font-bold text-gray-700 mt-5"
          htmlFor="alta"
        >
          alta
        </label>
        <input
          type="date"
          className="w-full placeholder-gray-400 shadow-md border-2 mt-2 p-2 rounded-md"
          id="alta"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <label
          className="block uppercase font-bold text-gray-700 mt-5"
          htmlFor="sintomas"
        >
          síntomas
        </label>
        <textarea
          className="w-full placeholder-gray-400 shadow-md border-2 mt-2 p-2 rounded-md"
          id="sintomas"
          placeholder="Describe los síntomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 w-full p-2 my-2 text-white font-bold uppercase rounded-md transition-colors"
        >
          {paciente.id ? "Editar paciente" : "Agregar paciente"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
