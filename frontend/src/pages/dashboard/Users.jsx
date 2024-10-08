import UserTr from "../../components/dashboard/UserTr";
import useFetchData from "../../hooks/useFetchData";

const Users = () => {
  const { data, error, loading } = useFetchData("/api/v1/users");
  console.log(data);

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
            {error && <p>{error}</p>}
            {loading && (
              <h1 className="text-red-300 text-lg font-semibold">Loading...</h1>
            )}

            {data && data.users != null && data.users.length > 0
              ? data.users.map((user, index) => (
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
              : ""}
            {/* <UserTr /> */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
