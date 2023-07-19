const Error = ({mensaje}) => {
  return (
    <div className=" rounded-md p-3 text-white bg-red-700 mb-3 font-bold uppercase text-center">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
