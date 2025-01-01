import { formatDate } from "../../utlity/dateUtils";
import PropTypes from "prop-types";
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
          {profilePic ? (
            <img
              className="w-6 h-6 rounded-full border cursor-pointer"
              src={profilePic}
            />
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
  onEditClick: PropTypes.func,
};
