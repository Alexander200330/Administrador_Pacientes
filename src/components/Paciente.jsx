const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleDelete = () => {
    const result = confirm("¿Estás seguro que quieres eliminar este paciente?");

    if (result) {
      deletePaciente(id);
    }
  };

  return (
    <div className="bg-white rounded-lg py-10 px-5 text-xl shadow-lg my-5">
      <p className="uppercase text-lg font-bold text-gray-700 mb-4">
        Nombre: {""}
        <span className="font-normal capitalize">{nombre}</span>
      </p>
      <p className=" text-lg uppercase font-bold text-gray-700 mb-4">
        propietario: {""}
        <span className="font-normal capitalize">{propietario}</span>
      </p>
      <p className="text-lg uppercase font-bold text-gray-700 mb-4">
        email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="text-lg uppercase font-bold text-gray-700 mb-4">
        alta: {""}
        <span className="font-normal capitalize">{fecha}</span>
      </p>
      <p className="text-lg uppercase font-bold text-gray-700 mb-4">
        sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          className="bg-indigo-600 uppercase text-center font-bold my-3 px-10 py-2 rounded-md hover:bg-infigo-700 transition-colors text-lg text-white"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 uppercase text-center font-bold my-3 px-10 py-2 rounded-md hover:bg-red-700 transition-colors text-white text-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
