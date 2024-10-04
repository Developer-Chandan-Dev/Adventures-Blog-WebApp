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
            viewBox="0 0 512 512"
            width="16"
            height="16"
            fill="crimson"
          >
            <path d="M217.6 96.1c-12.95-.625-24.66 9.156-25.52 22.37C191.2 131.7 201.2 143.1 214.4 143.1c79.53 5.188 148.4 74.09 153.6 153.6c.8281 12.69 11.39 22.43 23.94 22.43c.5156 0 1.047-.0313 1.578-.0625c13.22-.8438 23.25-12.28 22.39-25.5C409.3 191.8 320.3 102.8 217.6 96.1zM224 0C206.3 0 192 14.31 192 32s14.33 32 32 32c123.5 0 224 100.5 224 224c0 17.69 14.33 32 32 32s32-14.31 32-32C512 129.2 382.8 0 224 0zM172.3 226.8C157.7 223.9 144 235.8 144 250.6v50.37c0 10.25 7.127 18.37 16.75 21.1c18.13 6.75 31.26 24.38 31.26 44.1c0 26.5-21.5 47.1-48.01 47.1c-26.5 0-48.01-21.5-48.01-47.1V120c0-13.25-10.75-23.1-24.01-23.1l-48.01 .0076C10.75 96.02 0 106.8 0 120v247.1c0 89.5 82.14 160.2 175 140.7c54.38-11.5 98.27-55.5 109.8-109.7C302.2 316.1 247.8 241.8 172.3 226.8z" />
          </svg>{" "}
          <span className="text-[crimson] text-semibold text-sm font-bold">
            /
          </span>{" "}
          <span className="text-[crimson] text-semibold font-semibold">
            Draft Blogs
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
        <div className="rounded-2xl flex h-auto py-2 flex-wrap gap-x-2 px-2 gap-y-3 backdrop-filter backdrop-blur-sm bg-opacity-20 bg-white drop-shadow-lg shadow accountDetailsForm">
          <div className="w-[235px] h-56 mx-auto flex-center mx">
            <div className="w-40 h-40 rounded-md overflow-hidden shadow drop-shadow flex-center">
              {/* {formData.profilePic ? (
                <img
                  src={formData.profilePic}
                  alt="img"
                  className="w-full h-full object-fill"
                />
              ) : (
                <h1 className="text-7xl font-bold text-slate-500">
                  {authDashboardUser.username[0]}
                </h1>
              )} */}
            </div>
          </div>
          <form
            className="w-[350px] h-56 mx-auto px-4 py-3 text-sm"
            // onSubmit={handleUpdate}
          >
            <div className="flex items-center justify-between gap-x-3 gap-y-2">
              <h2 className="font-semibold text-lg">My Profile:</h2>
              <h4 className="font-semibold text-slate-600 ">
                {/* {formData.username !== undefined &&
                formData.username.includes("-")
                  ? formData.username.split("-")[0]
                  : formData.username}{" "}
                | {formData.role} */}
              </h4>
            </div>
            <div className="flex items-center justify-between gap-x-3 gap-y-2 my-5 flex-wrap">
              <h5>Name:</h5>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                // value={formData.fullname}
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
                // value={formData.email}
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
        <div className="rounded-2xl shadow w-80 backdrop-filter backdrop-blur-sm bg-opacity-20 bg-white drop-shadow-lg h-32 px-6 py-5 text-sm accountActiveBox">
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
        <div className="rounded-2xl shadow w-80 backdrop-filter backdrop-blur-sm bg-opacity-20 bg-white drop-shadow-lg h-auto px-6 py-5 text-sm accountActiveBox">
          <div className="flex items-center justify-between border-b py-2">
            <h2 className="font-semibold text-lg">Change Password</h2>
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
          <form className="flex items-center justify-between py-4 flex-col">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md outline-slate-300 border mb-5 h-9"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="w-full px-3 py-2 rounded-md outline-slate-300 border mb-5 h-9"
              placeholder="Current Password"
              required
            />
            <input
              type="password"
              className="w-full px-3 py-2 rounded-md outline-slate-300 border mb-5 h-9"
              placeholder="New Password"
              required
            />
            <input
              type="submit"
              value="Update"
              className="px-6 mt-3 rounded-full py-[6px] cursor-pointer text-white font-semibold transition-all hover:drop-shadow "
              style={{ background: "linear-gradient(45deg, #edb855, #ff5959)" }}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Settings;
