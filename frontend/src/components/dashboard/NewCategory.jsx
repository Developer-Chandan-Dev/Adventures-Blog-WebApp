const NewCategory = () => {
  return (
    <>
      <div className="w-[450px] h-auto py-1 px-1 rounded-md ">
        <div className="pl-5 py-5">
          <h1 className="font-semibold">Add New Category</h1>

          <form className="text-sm mt-2">
            <div>
              <div className="py-2 text-slate-500">
                <label htmlFor="name" className="ml-1">
                  Name
                </label>
              </div>
              <input
                type="text"
                className="w-96 h-8 px-3 py-2 b outline-red-100 rounded-md border"
                placeholder="Category name"
                id="name"
                required
              />
            </div>
            <div className="py-1 text-slate-500">
              <div className="py-2">
                <label htmlFor="desc" className="ml-1">
                  Description
                </label>
              </div>
              <textarea
                name=""
                id=""
                rows="7"
                className="resize-none rounded-md px-3 py-2 border w-96 outline-red-100"
                placeholder="Enter your description"
              ></textarea>
            </div>
            <input type="submit" value="Add" className="btn cursor-pointer" />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCategory;
