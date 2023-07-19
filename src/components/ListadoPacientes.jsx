import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      {pacientes && pacientes.length ? (
        <>
          <div className="">
            <h2 className="font-black text-3xl text-center">
              Listados pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-5">
              Administra tus {""}
              <span className="text-indigo-600 font-bold">
                pacientes y citas
              </span>
            </p>
          </div>
          <div className="h-screen md:overflow-y-scroll">
            {pacientes.map((paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                deletePaciente={deletePaciente}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Comienza a agregar pacientes y {""}
            <span className="text-indigo-600 font-bold">
              aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
