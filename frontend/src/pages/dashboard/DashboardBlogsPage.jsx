const DashboardBlogsPage = () => {
  return (
    <section>
      <div className="w-full py-6 px-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[crimson]">All Published</span> Blogs
          </h1>
          <h4 className="text-[crimson] text-base font-semibold">
            ADMIN PANEL
          </h4>
        </div>
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="16"
            height="16"
            fill="crimson"
          >
            <path d="M217.6 96.1c-12.95-.625-24.66 9.156-25.52 22.37C191.2 131.7 201.2 143.1 214.4 143.1c79.53 5.188 148.4 74.09 153.6 153.6c.8281 12.69 11.39 22.43 23.94 22.43c.5156 0 1.047-.0313 1.578-.0625c13.22-.8438 23.25-12.28 22.39-25.5C409.3 191.8 320.3 102.8 217.6 96.1zM224 0C206.3 0 192 14.31 192 32s14.33 32 32 32c123.5 0 224 100.5 224 224c0 17.69 14.33 32 32 32s32-14.31 32-32C512 129.2 382.8 0 224 0zM172.3 226.8C157.7 223.9 144 235.8 144 250.6v50.37c0 10.25 7.127 18.37 16.75 21.1c18.13 6.75 31.26 24.38 31.26 44.1c0 26.5-21.5 47.1-48.01 47.1c-26.5 0-48.01-21.5-48.01-47.1V120c0-13.25-10.75-23.1-24.01-23.1l-48.01 .0076C10.75 96.02 0 106.8 0 120v247.1c0 89.5 82.14 160.2 175 140.7c54.38-11.5 98.27-55.5 109.8-109.7C302.2 316.1 247.8 241.8 172.3 226.8z" />
          </svg>{" "}
          <span className="text-[crimson] text-semibold text-sm font-bold">
            /
          </span>{" "}
          <span className="text-[crimson] text-semibold font-semibold">
            Blogs
          </span>
        </div>
      </div>
      <section className="w-full h-96 px-8 py-1">
        <div className="w-full relative h-[480px]">
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
          <div className="w-full h-auto pb-2 mt-5 overflow-x-auto relative">
            <table className="mx-auto h-auto text-sm relative w-[600px] sm:w-[700px] md:w-[800px] lg:w-[1200px]">
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
              <tbody>
                <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                  <td className="px-4 font-medium">Hello</td>
                  <td className="px-4">Everyone</td>
                  <td className="pl-5">Everyone</td>
                  <td className="pl-">
                    <div className="flex items-center ml-4">
                      <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          width="14"
                          height="14"
                          fill="white"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                      <span className="ml-3">Unread</span>
                    </div>
                  </td>
                </tr>
                <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                  <td className="px-4 font-medium">Hello</td>
                  <td className="px-4">Everyone</td>
                  <td className="pl-5">Everyone</td>
                  <td className="pl-">
                    <div className="flex items-center ml-4">
                      <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          width="14"
                          height="14"
                          fill="white"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                      <span className="ml-3">Unread</span>
                    </div>
                  </td>
                </tr>
                <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                  <td className="px-4 font-medium">Hello</td>
                  <td className="px-4">Everyone</td>
                  <td className="pl-5">Everyone</td>
                  <td className="pl-">
                    <div className="flex items-center ml-4">
                      <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          width="14"
                          height="14"
                          fill="white"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                      <span className="ml-3">Unread</span>
                    </div>
                  </td>
                </tr>
                <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                  <td className="px-4 font-medium">Hello</td>
                  <td className="px-4">Everyone</td>
                  <td className="pl-5">Everyone</td>
                  <td className="pl-">
                    <div className="flex items-center ml-4">
                      <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          width="14"
                          height="14"
                          fill="white"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                      <span className="ml-3">Unread</span>
                    </div>
                  </td>
                </tr>
                <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                  <td className="px-4 font-medium">Hello</td>
                  <td className="px-4">Everyone</td>
                  <td className="pl-5">Everyone</td>
                  <td className="pl-">
                    <div className="flex items-center ml-4">
                      <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          width="14"
                          height="14"
                          fill="white"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                      <span className="ml-3">Unread</span>
                    </div>
                  </td>
                </tr>
                <tr className="w-full h-12 cursor-pointer hover:shadow border-b  bg-white hover:bg-gray-50 text-gray-500">
                  <td className="px-4 font-medium">Hello</td>
                  <td className="px-4">Everyone</td>
                  <td className="pl-5">Everyone</td>
                  <td className="pl-">
                    <div className="flex items-center ml-4">
                      <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          width="14"
                          height="14"
                          fill="white"
                          viewBox="0 0 320 512"
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                      <span className="ml-3">Unread</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full text-sm px-5 py-2 h-14 absolute bottom-0 flex-center">
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
                <button className="px-4 py-2 drop-shadow shadow rounded-md">3</button>
              </>
              <button className="px-4 py-2 bg-white shadow drop-shadow rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DashboardBlogsPage;
