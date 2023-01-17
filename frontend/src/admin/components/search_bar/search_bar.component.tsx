import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { filterByName, fetchRecipes } from "../../../redux/dish/dish";

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length !== 0) {
      dispatch(filterByName(newValue));
    } else {
      dispatch(fetchRecipes());
    }
  };
  useEffect(() => {
    console.log("Searching");
  }, [filterByName]);
  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full px-2 py-1 bg-[#358546d8]/60  text-white   focus:outline-0 rounded-xl transform duration-700 ease-in "
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
