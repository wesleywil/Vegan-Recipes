type RecipeItemInfo = {
  id: string;
  name: string;
  category: string;
  preparation_time: number;
  special: boolean;
};

const RecipeItem = ({ ...item }: RecipeItemInfo) => {
  return (
    <div className="w-full flex p-1">
      <div className="w-full self-center px-2 flex justify-between  text-white bg-[#358546d8]/60 z-10 rounded-xl">
        <div className="flex flex-col gap-0 py-2">
          <h1 className="text-2xl font-semibold">
            {item.name} {item.special ? "- Special" : ""}
          </h1>

          <h3>
            {item.category} - {item.preparation_time}m
          </h3>
        </div>
        <div className="flex self-center gap-2 p-2">
          <button className="flex-none h-8 px-2 bg-yellow-500 hover:bg-yellow-300 text-white hover:text-gray-600 font-bold  rounded-xl transform duration-700 ease-in-out">
            Edit
          </button>
          <button className="flex-none h-8 px-2  bg-red-500 hover:bg-red-300 text-white hover:text-gray-600 font-bold  rounded-xl transform duration-700 ease-in-out">
            Del
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
