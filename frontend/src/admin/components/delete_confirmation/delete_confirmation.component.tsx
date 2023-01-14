const DeleteConfirmation = () => {
  return (
    <div className="w-1/2 mx-auto flex gap-2 justify-center font-bold text-center text-[#358546] text-xl mb-2">
      <h1>Are you sure you want to delete this recipe?</h1>
      <div className="flex gap-1">
        <button className="text-red-600 hover:text-red-800  transform duration-700 ease-in-out">
          Yes
        </button>
        /
        <button className="text-blue-600 hover:text-blue-800 transform duration-700 ease-in-out">
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
