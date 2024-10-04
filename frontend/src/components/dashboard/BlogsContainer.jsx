import { Link } from "react-router-dom";

const BlogsContainer = () => {
  return (
    <>
      <div className="w-full relative h-auto ">
        <div className="flex items-center gap-x-3">
          <label htmlFor="searchbox" className="font-semibold">
            Search Blogs:{" "}
          </label>
          <div className="">
            <input
              type="text"
              className="w-80 h-9 px-3 py-1 text-[15px] rounded-md border-2 outline-gray-300"
              placeholder="Search by title"
            />
          </div>
        </div>
        <div className="w-full pb-2 mt-5 overflow-x-auto relative h-[400px] bg-[#ffffff94]">
          <table className="mx-auto h-auto text-sm relative w-[600px] sm:w-[700px] md:w-[800px] lg:w-[1200px] ">
            <thead className="relative">
              <tr className="w-full h-12 bg-[#e55370] text-white rounded-sm overflow-hidden border-b sticky top-0">
                <th className="px-4 text-left">#</th>
                <th className="px-4 text-left">Title</th>
                <th className="px-5 text-left">Slug</th>
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
              <tr className="w-full h-12 cursor-pointer hover:shadow border-b  hover:bg-gray-50 text-gray-500">
                <td className="px-4 font-medium">Hello</td>
                <td className="px-4">Everyone</td>
                <td className="pl-5">Everyone</td>
                <td className="pl-">
                  <div className="flex items-center ml-8 gap-x-3">
                    <div title="Edit Blog">
                      <Link to="/dashboard/blogs/update/asdkfj39d9d">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="16"
                          height="16"
                          className="bi bi-trash3 opacity-35 transition-all hover:opacity-90"
                          fill="red"
                        >
                          <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
                        </svg>
                      </Link>
                    </div>
                    <span className="text-red-400 text-xl">|</span>
                    <div title="Delete blog">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        className="bi bi-trash3 opacity-45 transition-all hover:opacity-90"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
              {/* <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                <td className="px-4 font-medium">Hello</td>
                <td className="px-4">Everyone</td>
                <td className="pl-5">Everyone</td>
                <td className="pl-">
                  <div className="flex items-center ml-8 gap-x-3">
                    <div title="Edit Blog">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="16"
                        height="16"
                        className="bi bi-trash3 opacity-35 transition-all hover:opacity-90"
                        fill="red"
                      >
                        <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
                      </svg>
                    </div>
                    <span className="text-red-400 text-xl">|</span>
                    <div title="Delete blog">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        className="bi bi-trash3 opacity-45 transition-all hover:opacity-90"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                <td className="px-4 font-medium">Hello</td>
                <td className="px-4">Everyone</td>
                <td className="pl-5">Everyone</td>
                <td className="pl-">
                  <div className="flex items-center ml-8 gap-x-3">
                    <div title="Edit Blog">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="16"
                        height="16"
                        className="bi bi-trash3 opacity-35 transition-all hover:opacity-90"
                        fill="red"
                      >
                        <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
                      </svg>
                    </div>
                    <span className="text-red-400 text-xl">|</span>
                    <div title="Delete blog">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        className="bi bi-trash3 opacity-45 transition-all hover:opacity-90"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                <td className="px-4 font-medium">Hello</td>
                <td className="px-4">Everyone</td>
                <td className="pl-5">Everyone</td>
                <td className="pl-">
                  <div className="flex items-center ml-8 gap-x-3">
                    <div title="Edit Blog">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="16"
                        height="16"
                        className="bi bi-trash3 opacity-35 transition-all hover:opacity-90"
                        fill="red"
                      >
                        <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
                      </svg>
                    </div>
                    <span className="text-red-400 text-xl">|</span>
                    <div title="Delete blog">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        className="bi bi-trash3 opacity-45 transition-all hover:opacity-90"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
              */}
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

export default BlogsContainer;
