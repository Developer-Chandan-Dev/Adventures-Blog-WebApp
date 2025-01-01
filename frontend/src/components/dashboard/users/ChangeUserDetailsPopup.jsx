/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./style.css";
import { Edit2, User2Icon, X } from "lucide-react";
import { useRef, useState } from "react";
import useHandlePostRequest from "../../../hooks/useHandlePostRequest";

const ChangeUserDetailsPopup = ({ user, onClose }) => {
  const [username, setUsername] = useState(user.username || "");
  const [email, setEmail] = useState(user.email || "");
  const [role, setRole] = useState(user.role || "");
  const [teamMember, setTeamMember] = useState(user.teamMember || "");
  const [blocked, setBlocked] = useState(user.isBlocked || "");
  const [image, setImage] = useState(user.profilePic || null);
  const [filePreview, setFilePreview] = useState(null);

  const fileInputRef = useRef(null);

  const { handleSubmit } = useHandlePostRequest();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      // Create a URL from the selected file
      const reader = new FileReader();
      reader.onloadend = (e) => {
        setFilePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("role", role);
    data.append("teamMember", teamMember);
    data.append("isBlocked", blocked);
    data.append("profilePic", image);

    const response = await handleSubmit(
      "PUT",
      `/api/v1/users/${user._id}`,
      data
    );
    console.log(response);
  };

  

  return (
    <div className="fixed left-0 top-0 w-full h-full z-10 drop-shadow text-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-5 flex-center">
      <div className="w-[800px] px-6 py-4 h-[550px] bg-white drop-shadow-lg shadow-xl shadow-slate-300 rounded-xl">
        <div className=" flex items-center justify-between">
          <h1>Change User Details</h1>
          <div className="py-1 flex-center transition-all rounded-md hover:bg-red-500 w-7 cursor-pointer hover:text-white">
            <X size={18} className="" onClick={onClose} />
          </div>
        </div>

        <form
          className="flex py-6 gap-3 text-[14px] text-gray-700 font-medium"
          onSubmit={onSubmit}
        >
          <div className="w-80 h-full flex items-center mt-6 justify-start flex-col">
            <div className="w-40 h-40 drop-shadow border rounded-md relative mainImageBox overflow-hidden">
              {filePreview ? (
                <img
                  src={filePreview}
                  className="w-full h-full"
                  alt="User Pic"
                />
              ) : (
                <User2Icon className="w-full h-full" />
              )}

              <div
                className="absolute w-8 h-8 top-3 drop-shadow right-3 bg-white rounded-md flex-center cursor-pointer editButton"
                title="Edit"
              >
                <Edit2
                  size={20}
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                />
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div className="w-80 h-full ">
            <div>
              <input
                type="text"
                className="px-3 w-72 py-2 rounded-md drop-shadow border outline-slate-200 my-2"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <input
                type="email"
                className="px-3 w-72 py-2 rounded-md drop-shadow border outline-slate-200 my-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="my-2">
              <label htmlFor="role" className="ml-4 my-4 text-slate-700">
                Role:
              </label>
              <br />
              <select
                name="role"
                id="role"
                className="px-3 w-72 py-2 drop-shadow rounded-md border outline-slate-200 my-2"
                required
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Choose Role</option>
                <option selected={role === "admin"} value="admin">
                  Admin
                </option>
                <option selected={role === "author"} value="author">
                  Author
                </option>
                <option selected={role === "reader"} value="reader">
                  Reader
                </option>
              </select>
            </div>
            <div className="my-3">
              <label htmlFor="blocked" className="ml-2 text-slate-700">
                Status:
              </label>
              <br />
              <select
                name="blocked"
                id="blocked"
                className="px-3 w-72 py-2 drop-shadow rounded-md border outline-slate-200 my-2"
                required
                onChange={(e) => setBlocked(e.target.value)}
              >
                <option value="">Choose Status</option>
                <option selected={blocked === true} value={true}>
                  Blocked
                </option>
                <option
                  selected={
                    blocked === false ||
                    blocked === "" ||
                    blocked === "undefined"
                  }
                  value={false}
                >
                  Unblocked
                </option>
              </select>
            </div>
            <div className="my-5">
              <label className="ml-2 text-slate-700 ">Team Member:</label>
              <br />
              <div className="ml-4 my-3 flex items-center gap-3">
                <div className="flex items-center">
                  <label htmlFor="yes" className="cursor-pointer">
                    Yes :
                  </label>
                  <input
                    type="radio"
                    id="yes"
                    className="mx-3 w-5 h-5 cursor-pointer"
                    name="team-member"
                    value={true}
                    onChange={() => setTeamMember(true)}
                    checked={teamMember === true}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="no" className="cursor-pointer">
                    No :
                  </label>
                  <input
                    type="radio"
                    id="no"
                    className="mx-3 w-5 h-5 cursor-pointer"
                    name="team-member"
                    value={false}
                    onChange={() => setTeamMember(false)}
                    checked={teamMember === false}
                  />
                </div>
              </div>
            </div>

            <div className="ml-2 mt-4">
              <button className="px-6 rounded-md py-2 border text-[crimson] border-[crimson] font-semibold transition-all hover:text-white hover:bg-[crimson] hover:shadow-md shadow-[crimson]">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeUserDetailsPopup;
// Rim jhim gire shawan, bahak bahak jaye man
