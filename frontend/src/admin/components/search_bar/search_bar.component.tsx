const SearchBar = () => {
  return (
    <div className="w-full">
      <input
        type="text"
        className="w-2/3 px-2 py-1 bg-[#358546d8]/60  text-white   focus:outline-0 rounded-l-xl transform duration-700 ease-in "
      />
      <button className="bg-[#358546] hover:bg-[#20522b]/70 px-2 py-1 rounded-r-xl transform duration-700 ease-in">
        search
      </button>
    </div>
  );
};

export default SearchBar;
