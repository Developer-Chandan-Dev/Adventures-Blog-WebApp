import useFetchData from "../../hooks/useFetchData";
import BlogDetailsTr from "./BlogDetailsTr";
import Empty from "../utlity/Empty";
import Spinner from "../utlity/Spinner";

const DraftBlogsContainer = () => {
  const { data, error, loading } = useFetchData(
    "/api/v1/blogs/dashboard-blogs/draft"
  );

  return (
    <>
      <div className="w-full relative h-auto ">
        <div className="flex items-center gap-x-3">
          <label htmlFor="searchbox" className="font-semibold">
            Search Blogs:
          </label>
          <div className="">
            <input
              type="text"
              className="w-80 h-9 px-3 py-1 text-[15px] rounded-md border-2 outline-gray-300"
              // placeholder={`Search by ${searchBy}`}
              // value={searchTerm}
              // onChange={handleSearch}
            />
            <select
              name="searchBy"
              id="searchBy"
              // value={searchBy}
              // onChange={(e) => setSearchBy(e.target.value)}
              className="w-32 text-sm border ml-2 border-slate-200 outline-slate-300 px-2 cursor-pointer py-1 rounded-md pb-1"
            >
              <option value="title">Title</option>
              <option value="slug">Slug</option>
              <option value="status">Status</option>
              <option value="featuredBlog">Featured Blog</option>
              <option value="author">Author</option>
              <option value="publishedAt">Published Date</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
        <div className="w-full pb-2 mt-5 overflow-x-auto relative h-[550px] bg-[#ffffff94]">
          <table className="mx-auto h-auto text-sm relative w-[1300px]">
            <thead className="relative">
              <tr className="w-full h-12 bg-[#e55370] text-white rounded-sm overflow-hidden border-b sticky top-0">
                <th className="px-4 text-left">#</th>
                <th className="px-4 text-left">Title</th>
                <th className="px-5 text-left">Slug</th>
                <th className="px-5 text-left">Status</th>
                <th className="px-5 text-left">Featured Post</th>
                <th className="px-5 text-left">Author</th>
                <th className="px-5 text-left">Published Date</th>
                <th className="px-5 text-left">Category</th>
                <th className="px-5 text-left flex pt-4">
                  <span className="mr-3">Edit/Delete</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className=" opacity-60"
                  >
                    <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td colSpan={9}>{error && <p>{error}</p>}</td>
              </tr>

              <tr>
                <td colSpan={9}>
                  {loading && (
                    <div className="w-full h-[300px] flex-center">
                      <Spinner />
                    </div>
                  )}
                </td>
              </tr>
              {data && data.posts != null && data.posts.length > 0 ? (
                data.posts.map((post, index) => (
                  <BlogDetailsTr
                    key={index}
                    index={index}
                    _id={post._id}
                    title={post.title}
                    slug={post.slug}
                    status={post.status}
                    author={post.author}
                    createdAt={post.createdAt}
                    category={post.category}
                    featuredBlog={post.featuredBlog}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={9}>
                    <Empty boxHeight={"400px"} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="w-full text-sm px-5 py-2 h-14 flex-center pb-2">
          <div className="flex items-center gap-x-2">
            <button
              className="px-4 py-2 rounded-md drop-shadow shadow"
              disabled={true}
            >
              Previous
            </button>
            <>
              <button className="px-4 py-2  drop-shadow shadow-md bg-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 drop-shadow shadow rounded-md">
                2
              </button>
              <button className="px-4 py-2 drop-shadow shadow rounded-md">
                3
              </button>
            </>
            <button className="px-4 py-2 bg-white shadow drop-shadow rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftBlogsContainer;
