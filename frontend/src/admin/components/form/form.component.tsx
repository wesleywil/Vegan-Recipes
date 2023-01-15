import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { switch_form_view } from "../../../redux/admin/admin";

const Form = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="centered z-20  md:w-96 pattern2 border border-black rounded-xl">
      <div className="bg-[#358546]/80 text-white font-bold flex justify-between rounded-t-xl p-1">
        <span className="self-center text-sm px-2 ">Update/Create</span>
        <button
          onClick={() => dispatch(switch_form_view())}
          className="mx-2 self-center bg-white text-[#358546] hover:text-red-600 text-xl px-2 rounded-full transition durarion-700 ease-in-out"
        >
          X
        </button>
      </div>
      <form className="flex flex-col text-xl p-2 font-semibold">
        <span>Name</span>
        <input
          type="text"
          placeholder="recipe's name"
          className="p-1 rounded"
        />
        <span>Description</span>
        <textarea
          placeholder="recipe's description"
          className="p-1 rounded"
        ></textarea>
        <span>Category</span>
        <input
          type="text"
          placeholder="recipe's category"
          className="p-1 rounded"
        />
        <span>Preparation Time</span>
        <input
          type="number"
          placeholder="recipe's preparation time"
          className="p-1 rounded"
        />
        <span>Special</span>
        <input
          type="checkbox"
          className="w-12 mt-2 p-1 border border-black float-left"
        />
        <div className="flex gap-4 justify-center text-white pt-2 my-2 border-t-2 border-[#358546]">
          <button className="bg-[#358546] hover:bg-[#20522b]/70 px-2 py-1 rounded-xl transform duration-700 ease-in">
            Submit
          </button>
          <button
            onClick={() => dispatch(switch_form_view())}
            type="button"
            className="bg-[#358546] hover:bg-[#20522b]/70  px-2 py-1 rounded-xl transform duration-700 ease-in"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
