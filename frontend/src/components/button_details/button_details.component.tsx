const ButtonDetails = ({ handleClick }: any) => {
  return (
    <button
      onClick={handleClick}
      className="hover:text-[#070804] hover:font-bold bg-[#358546] border-2 border-[#358546] px-2 rounded text-xl hover:opacity-90 hover:bg-transparent transition duration-700 ease-in-out"
    >
      More Info
    </button>
  );
};

export default ButtonDetails;
