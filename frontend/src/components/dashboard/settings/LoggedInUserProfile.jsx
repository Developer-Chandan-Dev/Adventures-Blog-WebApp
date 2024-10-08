import { useSelector } from "react-redux";

const LoggedInUserProfile = () => {
  const authUser = useSelector((state) => state.user.user);
  console.log(authUser);

  return (
    <>
      <div className="rounded-2xl flex h-auto py-2 flex-wrap gap-x-2 px-2 gap-y-3 backdrop-filter backdrop-blur-sm bg-opacity-20 bg-white drop-shadow-lg shadow accountDetailsForm">
        <div className="w-[235px] h-56 mx-auto flex-center mx">
          <div className="w-40 h-40 rounded-md overflow-hidden shadow drop-shadow flex-center">
            {authUser.profilePic ? (
                <img
                  src={authUser.profilePic}
                  alt="img"
                  className="w-full h-full object-fill"
                />
              ) : (
                <h1 className="text-7xl font-bold text-slate-500">
                  {authUser.username[0]}
                </h1>
              )}
          </div>
        </div>
        <form
          className="w-[350px] h-56 mx-auto px-4 py-3 text-sm"
          // onSubmit={handleUpdate}
        >
          <div className="flex items-center justify-between gap-x-3 gap-y-2">
            <h2 className="font-semibold text-lg">My Profile:</h2>
            <h4 className="font-semibold text-slate-600 ">
              {authUser.username !== undefined &&
                authUser.username.includes("-")
                  ? authUser.username.split("-")[0]
                  : authUser.username}{" "}
                | {authUser.role}
            </h4>
          </div>
          <div className="flex items-center justify-between gap-x-3 gap-y-2 my-5 flex-wrap">
            <h5>Name:</h5>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={authUser.username}
              // onChange={handleChange}
              className="rounded-md outline-neutral-300 px-3 py-1 drop-shadow h-8 border"
            />
          </div>
          <div className="my-4 ">
            <input
              type="email"
              placeholder="Your email"
              name="email"
              required
              value={authUser.email}
              // onChange={handleChange}
              className="w-full rounded-md outline-neutral-300 px-3 py-1 drop-shadow h-8 border"
            />
          </div>
          <div className="flex-center mt-8">
            <button
              className="px-6 rounded-full py-[6px] text-white font-semibold transition-all hover:drop-shadow"
              style={{
                background: "linear-gradient(45deg, #edb855, #ff5959)",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoggedInUserProfile;
