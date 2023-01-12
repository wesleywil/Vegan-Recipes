import { useDispatch } from "react-redux";
import { switch_view } from "../../redux/dish/dish";

export type DishInfo = {
  name: string;
  description: string;
  ingredients?: string[];
  category: string;
  preparation_time: number;
};

const MainDish = ({ ...info }: DishInfo) => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full px-4 py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1570145820386-15a56730192c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-11/12 mx-auto flex flex-col gap-2 items-center px-8 py-12 text-[white]/90 bg-[#358546]/40 backdrop-blur-sm rounded-xl">
        <h1 className="self-center text-6xl font-bold uppercase">
          {info.name}
        </h1>
        <h2 className="self-center text-3xl">{info.description}</h2>
        <div className="flex gap-4 justify-center text-xl">
          <h3>{info.category}</h3>-<h3>Time: {info.preparation_time}m</h3>
        </div>
        <button
          onClick={() => dispatch(switch_view())}
          className="hover:font-bold bg-[#358546] border-2 border-[#358546] px-2 rounded text-xl hover:opacity-90 hover:bg-transparent transition duration-700 ease-in-out"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainDish;
