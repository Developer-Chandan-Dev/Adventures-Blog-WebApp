import DashboardCards from "../../components/dashboard/DashboardCards";

const DashboardPage = () => {
  return (
    <section className="w-full">
      <div className="w-full py-6 px-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[crimson]">Blogs</span> Dashboard
          </h1>
          <h4 className="text-[crimson] text-base font-semibold">
            ADMIN PANEL
          </h4>
        </div>
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="crimson"
            className="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
          </svg>{" "}
          <span className="text-[crimson] text-semibold text-sm font-bold">
            /
          </span>{" "}
          <span className="text-[crimson] text-semibold font-semibold">
            Dashboard
          </span>
        </div>
      </div>
      <DashboardCards />
      <div className="flex items-center justify-between flex-wrap px-8 mt-10 mb-5">
        <div className="w-[68%] h-96 bg-red-100 rounded-3xl py-2 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 bg-green-200">
            <span className="font-semibold">Year Overview</span>
            <span className="font-semibold text-sky-500">Total Published</span>
          </div>
          <div className="h-fill-available w-full bg-blue-200 ">
            {/* <div className="w-full h-full bg-violet-300"></div> */}
          </div>
        </div>
        <div className="w-[30%] h-96 bg-green-100 rounded-3xl"></div>
      </div>
    </section>
  );
};

export default DashboardPage;
