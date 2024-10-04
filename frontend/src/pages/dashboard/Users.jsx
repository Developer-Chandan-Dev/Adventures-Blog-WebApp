const Users = () => {
  return (
    <section className="w-full">
      <div className="w-full py-6 px-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[crimson]">Users</span> Control
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
            Users
          </span>
        </div>
      </div>
      <div
        className=" px-4 py-2 w-full md:w-11/12 mx-auto overflow-auto relative bg-white rounded-xl drop-shadow"
        style={{ height: "500px" }}
      >
        <table
          className=" w-full mx-auto h-auto text-sm relative text-left text-gray-500"
          style={{ width: "1100px" }}
        >
          <thead className="relative">
            <tr className="w-full h-14 bg-white rounded-sm overflow-hidden border-b sticky top-0 z-10">
              <th className="px-2 text-left opacity-40 font-bold">
                <span>S. No.</span>
              </th>
              <th className="p2-4 text-left pt-4 opacity-40 flex items-center gap-x-1 font-bold">
                <span>User Name</span>{" "}
              </th>
              <th className="px-5 text-left opacity-40 font-bold">Email</th>
              <th className="p2-4 pl-10 text-left pt-4 opacity-40 flex items-center gap-x-1 font-bold">
                <span>Role</span>{" "}
              </th>
              <th className="px-5 text-left opacity-40 font-bold">
                Account creation date
              </th>
              <th className="p2-4 pl-10 text-left pt-4 opacity-40 flex items-center gap-x-1 font-bold">
                <span>Team Member</span>{" "}
              </th>
              <th className="px-5 text-left opacity-40 font-bold pl-10">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className={`w-full h-14 cursor-pointer hover:bg-blue-50 
            `}
              // ${   blocked === true ? "opacity-40" : "" }
            >
              <td className="pl-8 ">1</td>
              <td className="px-4">Chandan</td>
              <td className="px-4">chandan@gmail.com</td>
              <td className="px-4">
                <input
                  type="checkbox"
                  name="send"
                  id="send"
                  className="w-4 h-4 cursor-pointer mr-3"
                />
                <select
                  name="role"
                  id="role"
                  className="w-24 border border-slate-200 outline-slate-300 px-2 cursor-pointer py-1 rounded-md pb-1"
                >
                  <option className="" value="reader">
                    Reader
                  </option>
                  <option className="" value="author">
                    Author
                  </option>
                  <option className="" value="admin">
                    Admin
                  </option>
                </select>
              </td>
              <td className="px-4 pl-10"> 10/08/2024</td>
              <td className="px-4 pl-10">
                <input
                  type="checkbox"
                  id="teamMember"
                  className="ml-5 mr-3 w-4 h-4 cursor-pointer"
                />
                <span>No</span>
              </td>
              {/* <td className="px-4"> {indianDate(createdAt)} </td> */}
              <td className="h-7 px-4 text-gray-500 ">
                <div className="flex items-center justify-center h-7 gap-x-4">
                  <button
                    className="px-3 py-[6px] rounded-md border"
                    //   onClick={() =>
                    //     showAlertWithImage(profilePic ? profilePic : userIcon, username)
                    //   }
                  >
                    Image
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    //   onClick={() =>
                    //     onDelete(
                    //       id,
                    //       "/api/v1/admin/present-users",
                    //       setData,
                    //       data,
                    //       "User"
                    //     )
                    //   }
                    className="bi bi-trash3 cursor-pointer opacity-45 hover:opacity-100"
                    viewBox="0 0 16 16"
                    title="Delete"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <button
                    className={`w-6 h-6 rounded-full transition-all block-user 
                flex-center `}
                    // ${ blocked ? "active-block-user" : ""}
                    //   title={`${blocked ? "Unblock user" : "Block User"}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="16"
                      // onClick={() => onBlocked(id, blocked)}
                      height="16"
                      className="cursor-pointer opacity-45 hover:opacity-100"
                      title="Block"
                      // fill={`${blocked === true ? "white" : "black"}`}
                    >
                      <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default Users;
