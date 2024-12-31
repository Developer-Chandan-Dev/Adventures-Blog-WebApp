import { useEffect, useState } from "react";
import { formatDate } from "../../utlity/dateUtils";
import PropTypes from "prop-types";
import useUpdateFeaturedPostAndStatus from "../../../hooks/useUpdateFeaturedPostAndStatus";
import { Edit, Trash2, UserCircle2Icon } from "lucide-react";

const UserTr = ({
  _id,
  index,
  username,
  email,
  role,
  profilePic,
  isBlocked,
  teamMember,
  createdAt,
  onEditClick,
}) => {
  const [newRole, setNewRole] = useState("");
  const [block, setBlock] = useState("");
  const [profilePic2, setProiflePic2] = useState(false);
  // const [newTeamMember, setNewTeamMember] = useState("");

  const { handleChangeTrueFalse, handleLitleFetchChange } =
    useUpdateFeaturedPostAndStatus();

  useEffect(() => {
    setNewRole(role);
  }, [role]);

  // useEffect(() => {
  //   setNewTeamMember(teamMember);
  // }, [teamMember]);

  useEffect(() => {
    setBlock(isBlocked);
  }, [isBlocked]);

  const handleTeamMember = async (e) => {
    setNewTeamMember(e.target.value);
    const a = await handleChangeTrueFalse(
      `/api/v1/users/promote/members/${_id}`
    );
    // console.log(a);
  };

  const handleRoleChange = async (e) => {
    setNewRole(e.target.value);
    // console.log(newRole);
    const res = await handleLitleFetchChange(`/api/v1/users/role/${_id}`, {
      role: newRole,
    });
    // console.log(res);
  };

  const handleBlock = async () => {
    const res = await handleChangeTrueFalse(
      `/api/v1/users/block-unblock/${_id}`
    );
    setBlock((prev) => !prev); // Toggle between true and false
    // console.log(res);
  };

  // console.log(block);
  return (
    <>
      <tr
        className={`w-full h-14 ${
          isBlocked === true ? "bg-red-100 cursor-not-allowed" : ""
        } hover:bg-blue-50 
            `}
      >
        <td className="pl-8 ">{index + 1}</td>
        <td className="mr-2 flex items-center mt-3 gap-4">
          {profilePic2 ? (
            <img className="w-8 h-8 rounded-full border" />
          ) : (
            <UserCircle2Icon className="text-slate-300 transition-all hover:text-slate-500" />
          )}

          {username}
        </td>
        <td className="px-4">{email}</td>
        <td className="px-4 flex-center ">
          <span
            className={`border px-2 py-1 rounded-md pb-1 ${
              role === "admin"
                ? "text-white bg-[crimson] border-[crimson]"
                : role === "author"
                ? "text-white bg-green-500 border-green-500"
                : " border-slate-200 outline-slate-300"
            }`}
          >
            {role.toUpperCase()}
          </span>
        </td>
        <td className="pl-8 pr-1 ">{formatDate(createdAt)}</td>
        <td className="pl-14 ">
          <span
            className={`border border-slate-200 outline-slate-300 px-5 py-1 rounded-md pb-1 ${
              teamMember === true ? "bg-blue-400 text-white" : ""
            }`}
          >
            {teamMember === true ? "Yes" : "No"}
          </span>
        </td>
        <td className="h-7 px-4 text-gray-500 ">
          <div className="flex items-center justify-center h-7 gap-x-4">
            <Edit
              size={18}
              className="cursor-pointer opacity-45 text-blue-600 transition-all hover:text-blue-700 hover:opacity-100 "
              title="Edit"
              onClick={() =>
                onEditClick({
                  _id,
                  username,
                  email,
                  role,
                  profilePic,
                  isBlocked,
                  teamMember,
                  createdAt,
                })
              }
            />
            <Trash2
              size={18}
              className="cursor-pointer opacity-45 text-red-600 transition-all hover:text-[crimson] hover:opacity-100 "
              title="Delete"
              //   onClick={() =>
              //     onDelete(
              //       id,
              //       "/api/v1/admin/present-users",
              //       setData,
              //       data,
              //       "User"
              //     )}
            />

            {/* <button
              className={`w-6 h-6 rounded-full transition-all block-user 
                flex-center ${
                  block === true ? "bg-red-400" : "bg-transparent"
                }`}
              title={`${block ? "Unblock user" : "Block User"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="16"
                onClick={handleBlock}
                height="16"
                className="cursor-pointer opacity-45 hover:opacity-100"
                title="Block"
                fill={`${block === true ? "white" : "black"}`}
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </button> */}
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserTr;

UserTr.propTypes = {
  _id: PropTypes.string,
  index: PropTypes.number,
  username: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  profilePic: PropTypes.string,
  isBlocked: PropTypes.bool,
  teamMember: PropTypes.bool,
  createdAt: PropTypes.string,
};
