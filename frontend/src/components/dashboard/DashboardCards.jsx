const DashboardCards = () => {
  return (
    <>
      <div className="flex items-center gap-x-5 px-8 flex-wrap gap-y-5">
        <div className="w-60 xl:w-[23%] rounded-[30px] h-44 bg-[#7D4CC7] relative flex-center">
          <h1 className="font-semibold text-xl text-white drop-shadow">
            Total Blogs
          </h1>
          <div className="w-28 h-12 rounded-t-xl bg-[#a695c9] absolute bottom-0 mx-auto flex-center text-xl font-semibold text-white drop-shadow">
            8
          </div>
        </div>
        <div className="w-60 xl:w-[23%] rounded-[30px] h-44 bg-[#FF81A6] relative flex-center">
          <h1 className="font-semibold text-xl text-white drop-shadow">
            Total Categories
          </h1>
          <div className="w-28 h-12 rounded-t-xl bg-[#53318F] absolute bottom-0 mx-auto flex-center text-xl font-semibold text-white drop-shadow">
            8
          </div>
        </div>
        <div className="w-60 xl:w-[23%] rounded-[30px] h-44 bg-[#FFCE3F] relative flex-center">
          <h1 className="font-semibold text-xl text-white drop-shadow">
            Total Tags
          </h1>
          <div className="w-28 h-12 rounded-t-xl bg-[#948984] absolute bottom-0 mx-auto flex-center text-xl font-semibold text-white drop-shadow">
            8
          </div>
        </div>
        <div className="w-60 xl:w-[23%] rounded-[30px] h-44 bg-[#008bda] relative flex-center">
          <h1 className="font-semibold text-xl text-white drop-shadow">
            Draft Blogs
          </h1>
          <div className="w-28 h-12 rounded-t-xl bg-[#948A82] absolute bottom-0 mx-auto flex-center text-xl font-semibold text-white drop-shadow">
            8
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCards;
