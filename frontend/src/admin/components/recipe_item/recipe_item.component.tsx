const RecipeItem = () => {
  return (
    <div className="w-full flex p-4">
      <div className="w-full self-center px-2 flex justify-between  text-white bg-[#358546d8]/60 z-10 rounded-xl">
        <div className="flex flex-col gap-0 py-2">
          <h1 className="text-2xl font-semibold">Recipe</h1>

          <h3>Category name - 00m</h3>
        </div>
        <div className="flex self-center gap-2 p-2">
          <button className="flex-none h-12 px-2 border-2 border-yellow-500 hover:text-gray-300 font-bold text-white rounded-xl transform duration-700 ease-in-out">
            Edit
          </button>
          <button className="flex-none h-12 px-2 border-2 border-red-500 hover:text-gray-300 font-bold text-white rounded-xl transform duration-700 ease-in-out">
            Del
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
