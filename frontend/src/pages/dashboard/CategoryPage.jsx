import AvailableCategory from "../../components/dashboard/AvailableCategory";
import NewCategory from "../../components/dashboard/NewCategory";

const CategoryPage = () => {
  return (
    <section className="w-full">
      <div className="w-full py-6 px-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[crimson]">Categories</span>
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
            Category
          </span>
        </div>
      </div>
      <div className="w-full h-auto px-8 py-6 flex justify-between gap-x-8 text-slate-700">
        <NewCategory />
        <AvailableCategory />
      </div>
    </section>
  );
};

export default CategoryPage;
