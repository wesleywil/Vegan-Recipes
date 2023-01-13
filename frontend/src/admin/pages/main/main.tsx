import RecipeItem from "../../components/recipe_item/recipe_item.component";

const Main = () => {
  return (
    <div className="h-full min-h-screen	w-full min-w-screen">
      <svg viewBox="0 0 450 150">
        <text className="svgText" x="50" y="90">
          Admin
        </text>
      </svg>
      <div className="w-1/2  mx-auto flex gap-2 my-2 px-4 font-bold text-white text-xl">
        <button className="flex-none bg-[#358546d8] px-2 py-0 rounded-full">
          New recipe
        </button>
        <div className="w-full">
          <input
            type="text"
            className="w-2/3 px-2 py-1 bg-black/20  text-white rounded-l-xl"
          />
          <button className="bg-[#358546d8] px-2 py-1 rounded-r-xl">
            search
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto flex flex-col items-center gap-2 border border-[#358546] rounded-xl">
        <RecipeItem />
      </div>
    </div>
  );
};

export default Main;
