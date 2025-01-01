/* eslint-disable react/prop-types */
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { RefreshCwIcon } from "lucide-react";
import Spinner from "../../utlity/Spinner";
import UserTr from "../users/UserTr";
import Empty from "../../utlity/Empty";

const UsersTable = ({ data, error, loading, onEditClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("username");
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [refreshTable, setRefreshTable] = useState(false);

  const [teamMemberFilter, setTeamMemberFilter] = useState(""); // For teamMember filtering
  const [roleFilter, setRoleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState(""); // For date filtering

  const tableContainerRef = useRef(null);

  useEffect(() => {
    setFilteredUsers(data?.users);
  }, [data, refreshTable]);

  // <============= Search Functionality logic starts here =============>
  const handleInput = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredUsers(data?.users);
    }
  };
  // Handle search
  const handleSearch = () => {
    let filtered = data?.users;

    // Apply search filters based on selected criteria
    if (searchBy === "username" || searchBy === "email") {
      filtered = filtered.filter((user) =>
        user[searchBy]?.toLowerCase().includes(searchTerm)
      );
    } else if (searchBy === "teamMember") {
      if (teamMemberFilter === "true") {
        filtered = filtered.filter((user) => user.teamMember === true);
      } else if (teamMemberFilter === "false") {
        filtered = filtered.filter((user) => user.teamMember === false);
      }
    } else if (searchBy === "role") {
      if (roleFilter) {
        filtered = filtered.filter((user) => user.role === roleFilter);
      }
    } else if (searchBy === "date") {
      const start = new Date(dateFilter.startDate);
      const end = new Date(dateFilter.endDate);

      filtered = filtered.filter((user) => {
        const userDate = new Date(user.createdAt).toISOString().split("T")[0]; // Format to "yyyy-mm-dd"
        const formattedUserDate = new Date(userDate);

        return formattedUserDate >= start && formattedUserDate <= end;
      });
    }

    setFilteredUsers(filtered);
  };

  // <============= Table Dragging functionality (Optional: Add Touch Support) =============>

  const handleMouseDown = (e) => {
    const container = tableContainerRef.current;
    container.isDragging = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const container = tableContainerRef.current;
    if (!container.isDragging) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - container.startX;
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    const container = tableContainerRef.current;
    container.isDragging = false;
  };

  const handleTouchStart = (e) => {
    const container = tableContainerRef.current;
    container.isDragging = true;
    container.startX = e.touches[0].pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const container = tableContainerRef.current;
    if (!container.isDragging) return;

    e.preventDefault();
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = x - container.startX;
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  // <============= Refresh Table Functionality =============>
  const handleRefresh = () => {
    setRefreshTable(!refreshTable);
    setSearchBy("username");
  };

  return (
    <div>
      <div
        className=" px-4 py-2 mx-auto overflow-auto relative bg-white rounded-xl drop-shadow"
        // style={{ height: "540px" }}
      >
        <div className="flex items-center justify-between gap-x-3 py-3">
          <h2 className="text-2xl font-medium text-gray-500"></h2>
          <div className="flex items-center flex-wrap">
            <button
              className="px-3 py-[6px] border rounded-md mr-2 bg-white transition-all hover:drop-shadow-md flex items-center gap-x-1 text-gray-500 hover:text-gray-700"
              onClick={handleRefresh}
            >
              <RefreshCwIcon size={16} className="" />
              <span>Refresh</span>
            </button>

            <div className="w-80 rounded-md border-2 outline-gray-300 flex items-center justify-between">
              {searchBy === "teamMember" ? (
                <select
                  value={teamMemberFilter}
                  onChange={(e) => setTeamMemberFilter(e.target.value)}
                  className="w-full h-9 px-3 py-1 text-[15px] outline-none border-none"
                >
                  <option value="">Both</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              ) : searchBy === "role" ? (
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="w-full h-9 px-3 py-1 text-[15px] outline-none border-none"
                >
                  <option value="">All</option>
                  <option value="admin">Admin</option>
                  <option value="author">Author</option>
                  <option value="reader">Reader</option>
                </select>
              ) : searchBy === "date" ? (
                <div className="flex flex-col gap-y-2 px-2 py-1">
                  <input
                    type="date"
                    value={dateFilter.startDate}
                    onChange={(e) =>
                      setDateFilter((prev) => ({
                        ...prev,
                        startDate: e.target.value,
                      }))
                    }
                    className="w-full text-[15px] outline-none border rounded"
                  />
                  <input
                    type="date"
                    value={dateFilter.endDate}
                    onChange={(e) =>
                      setDateFilter((prev) => ({
                        ...prev,
                        endDate: e.target.value,
                      }))
                    }
                    className="w-full text-[15px] outline-none border rounded"
                  />
                </div>
              ) : (
                <input
                  type="text"
                  className="w-48 h-9 px-3 py-1 text-[15px] outline-none border-none"
                  placeholder={`Search by ${searchBy}`}
                  value={searchTerm}
                  onChange={handleInput}
                />
              )}
              <select
                name="searchBy"
                id="searchBy"
                value={searchBy}
                onChange={(e) => {
                  setSearchBy(e.target.value);
                  setSearchTerm("");
                  setTeamMemberFilter("");
                  setRoleFilter("");
                  setDateFilter({ startDate: "", endDate: "" });
                }}
                className="w-28 text-sm border-l outline-0 mr-[2px] border-slate-200 outline-slate-300 px-2 cursor-pointer py-1 pb-1"
              >
                <option value="username">Username</option>
                <option value="email">Email</option>
                <option value="role">Role</option>
                <option value="teamMember">Team Member</option>
                <option value="date">Date</option>
              </select>
            </div>

            <button
              className="px-3 py-[6px] border rounded-md ml-2 bg-white transition-all hover:drop-shadow-md flex items-center gap-x-1 text-gray-500 hover:text-gray-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div
          ref={tableContainerRef}
          className="table-container"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          style={{
            overflowX: "auto",
            cursor: "grab",
            width: "100%",
            maxWidth: "100%",
            userSelect: "none",
          }}
        >
          <table
            className={` w-full mx-auto h-auto text-sm relative text-left text-gray-500 `}
            style={{ width: "1200px" }}
          >
            <thead className="relative">
              <tr className="w-full h-14 bg-white rounded-sm overflow-hidden border-b sticky top-0 z-10">
                <th className="px-2 text-left opacity-40 font-bold">
                  <span>S. No.</span>
                </th>
                <th className="px-4 text-left pt-4 opacity-40 flex items-center gap-x-1 font-bold">
                  <span>User Name</span>{" "}
                </th>
                <th className="px-5 text-left opacity-40 font-bold">Email</th>
                <th className="p2-4 pl-10 text-left pt-4 opacity-40 flex items-center gap-x-1 font-bold">
                  <span>Role</span>{" "}
                </th>
                <th className="px-5 text-left opacity-40 font-bold">
                  Creation date
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
                      onEditClick={onEditClick}
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
  );
};

export default UsersTable;
