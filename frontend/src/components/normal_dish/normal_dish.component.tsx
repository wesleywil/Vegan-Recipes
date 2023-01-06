type DishInfo = {
  name: string;
  description: string;
  category: string;
  preparation_time: number;
};

const NormalDish = ({ ...info }: DishInfo) => {
  return (
    <div
      className="w-64 h-64 p-4 rounded-2xl border-2 border-[#358546]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full text-white bg-[#358546]/30 backdrop-blur-sm flex flex-col items-center justify-between  rounded-xl">
        <h1 className="text-3xl font-semibold">{info.name}</h1>
        <h2 className="hidden">{info.description}</h2>
        <div>
          <button className="hover:text-[#070804] hover:font-bold bg-[#358546] border-2 border-[#358546] px-2 rounded text-xl hover:opacity-90 hover:bg-transparent transition duration-700 ease-in-out">
            More Info
          </button>
        </div>
        <h3>
          {info.category} - {info.preparation_time}m
        </h3>
      </div>
    </div>
  );
};

export default NormalDish;
