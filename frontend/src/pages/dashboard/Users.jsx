import { useEffect, useState } from "react";
import UserTr from "../../components/dashboard/UserTr";
import Empty from "../../components/utlity/Empty";
import Spinner from "../../components/utlity/Spinner";
import useFetchData from "../../hooks/useFetchData";

const Users = () => {
  const { data, error, loading } = useFetchData("/api/v1/users");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("username");
  const [filteredUsers, setFilteredUsers] = useState(null);

  useEffect(() => {
    setFilteredUsers(data?.users);
  }, [data]);

  const handleInput = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredUsers(data?.users);
    }
  };
  const handleSearch = () => {
    const filtered = data?.users.filter((user) =>
      user[searchBy]?.toLowerCase().includes(searchTerm)
    );

    setFilteredUsers(filtered);
  };

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
            width="20"
            height="20"
            fill="crimson"
            viewBox="0 0 640 512"
          >
            <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
          </svg>
          <span className="text-[crimson] text-semibold text-sm font-bold">
            /
          </span>{" "}
          <span className="text-[crimson] text-semibold font-semibold">
            Users
          </span>
        </div>
      </div>
      <div className="w-full relative h-auto  md:w-11/12 mx-auto mb-5">
        <div className="flex items-center gap-x-3">
          <div className="">
            <input
              type="text"
              className="w-80 h-9 px-3 py-1 text-[15px] rounded-md border-2 outline-gray-300"
              placeholder={`Search by ${searchBy}`}
              value={searchTerm}
              onChange={handleInput}
            />
            <select
              name="searchBy"
              id="searchBy"
              value={searchBy}
              onChange={(e) => setSearchBy(e.target.value)}
              className="w-32 text-sm border ml-2 border-slate-200 outline-slate-300 px-2 cursor-pointer py-1 rounded-md pb-1"
            >
              <option value="username">Username</option>
              <option value="email">Email</option>
            </select>
            <button
              className="px-3 py-1 border rounded-md ml-2 bg-white transition-all hover:drop-shadow"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        className=" px-4 py-2 w-full md:w-11/12 mx-auto overflow-auto relative bg-white rounded-xl drop-shadow"
        // style={{ height: "540px" }}
      >
        <table
          className=" w-full mx-auto h-auto text-sm relative text-left text-gray-500"
          style={{ width: "1200px" }}
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
            <tr>
              <td colSpan={9}>
                {error && <p className="text-red-400">{error}</p>}
              </td>
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

            {filteredUsers && filteredUsers.length > 0 && !loading
              ? filteredUsers.map((user, index) => (
                  <UserTr
                    key={index}
                    index={index}
                    _id={user._id}
                    username={user.username}
                    email={user.email}
                    role={user.role}
                    profilePic={user.profilePic}
                    isBlocked={user.isBlocked}
                    teamMember={user.teamMember}
                    createdAt={user.createdAt}
                  />
                ))
              : !loading && (
                  <tr>
                    <td colSpan={9}>
                      <Empty boxHeight={"300px"} />
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
    </section>
  );
};

export default Users;
