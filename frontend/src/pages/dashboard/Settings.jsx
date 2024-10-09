import ChangePassword from "../../components/dashboard/settings/ChangePassword";
import LoggedInUserProfile from "../../components/dashboard/settings/LoggedInUserProfile";

const Settings = () => {
  return (
    <section>
      <div className="w-full py-6 px-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[crimson]">Account</span> Settings
          </h1>
          <h4 className="text-[crimson] text-base font-semibold">
            Admin Panel
          </h4>
        </div>
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="crimson"
            className="bi bi-gear-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
          <span className="text-[crimson] text-semibold text-sm font-bold">
            /
          </span>{" "}
          <span className="text-[crimson] text-semibold font-semibold">
            Settings
          </span>
        </div>
      </div>

      <div
        className=" flex gap-x-8 gap-y-5 flex-wrap px-5 sm:px-10 py-14 shadow rounded-2xl w-11/12 mx-auto"
        style={{
          background:
            "repeating-linear-gradient(45deg, #ffffff, transparent 200px)",
        }}
      >
        <LoggedInUserProfile />
        {/* backdrop-filter backdrop-blur-sm bg-opacity-20 */}
        <div className="rounded-2xl shadow w-80  bg-white drop-shadow-lg h-32 px-6 py-5 text-sm accountActiveBox">
          <div className="flex items-center justify-between border-b py-2">
            <h2 className="font-semibold text-lg">My Account</h2>
            <div className="rounded-full w-7 h-7 flex-center border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="13"
                height="13"
                className=" fill-slate-600"
              >
                <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <h2>Active Account</h2>
            <button
              className="px-6 rounded-full py-[6px] text-white font-semibold transition-all hover:drop-shadow "
              // onClick={handleLogout}
              style={{ background: "linear-gradient(45deg, #edb855, #ff5959)" }}
            >
              Logout
            </button>
          </div>
        </div>
        <ChangePassword />
      </div>
    </section>
  );
};

export default Settings;
