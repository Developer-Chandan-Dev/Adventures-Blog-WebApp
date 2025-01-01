import { useState } from "react";
import { useSelector } from "react-redux";
import useHandlePostRequest from "../../../hooks/useHandlePostRequest";

const ChangePassword = () => {
  const authUser = useSelector((state) => state.user.user);
  console.log(authUser);
  const [email, setEmail] = useState(authUser?.email || "");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { handleSubmit } = useHandlePostRequest();

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password, newPassword);
    const response = await handleSubmit(
      "PUT",
      `/api/v1/users/change-password/${authUser?._id}`,
      {
        email,
        password,
        newPassword,
      }
    );

    console.log(response);
  };
  return (
    <>
      {/* backdrop-filter backdrop-blur-sm bg-opacity-20 bg-white */}
      <div className="rounded-2xl shadow w-80 drop-shadow-lg h-auto bg-white px-6 py-5 text-sm accountActiveBox">
        <div className="flex items-center justify-between border-b py-2">
          <h2 className="font-semibold text-lg text-gray-600">
            Change Password
          </h2>
          <div className="rounded-full w-7 h-7 flex-center border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="13"
              height="13"
              className=" fill-slate-600"
            >
              <path d="M384 223.1L368 224V144c0-79.41-64.59-144-144-144S80 64.59 80 144V224L64 223.1c-35.35 0-64 28.65-64 64v160c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64v-160C448 252.7 419.3 223.1 384 223.1zM144 144C144 99.88 179.9 64 224 64s80 35.88 80 80V224h-160V144z" />
            </svg>
          </div>
        </div>
        <form
          className="flex items-center justify-between py-4 flex-col"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            className="w-full px-3 py-2 rounded-md outline-slate-300 border-2 mb-5 h-9"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-3 py-2 rounded-md outline-slate-300 border-2 mb-5 h-9"
            placeholder="Current Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-3 py-2 rounded-md outline-slate-300 border-2 mb-5 h-9"
            placeholder="New Password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Update"
            className="px-6 mt-3 rounded-full py-[6px] cursor-pointer text-white font-semibold transition-all hover:drop-shadow "
            style={{ background: "linear-gradient(45deg, #edb855, #ff5959)" }}
          />
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
