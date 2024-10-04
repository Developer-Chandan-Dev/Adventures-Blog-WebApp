const UpdateCategory = () => {
  return (
    <form className="w-92 h-auto mb-3 border drop-shadow bg-white rounded-md px-3 py-3">
      <input
        type="text"
        required
        className="w-[380px] h-8 rounded-md border outline-red-100 px-3"
        placeholder="Category name"
      />
      <textarea
        name="desc"
        id="desc"
        className="w-[380px] h-16 border outline-red-100 px-3 py-1 rounded-md mt-2"
        placeholder="Category description"
      ></textarea>
      <div className="py-1 flex items-center gap-x-2">
        <input type="submit" value="Update" className="px-3 py-[6px] drop-shadow-sm border bg-green-100 rounded-md cursor-pointer" />
        <input type="button" value="Cancel" className="px-3 py-[6px] drop-shadow-sm border bg-red-100 rounded-md cursor-pointer" />
      </div>
    </form>
  );
};

export default UpdateCategory;
