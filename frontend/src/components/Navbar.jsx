import { Link } from "react-router-dom";
import useAnimatedMenu from "../hooks/useAnimatedMenu";
import { useDispatch, useSelector } from "react-redux";
import authService from "../features/auth";
import { logout } from "../store/features/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  // Open/Close Hamburger
  const {
    isOpen: isHamburgerOpen,
    openMenu: openHamburger,
    closeMenu: closeHamburger,
    menuRef: hamburgerRef,
  } = useAnimatedMenu("x", -80, "x", 0, "x", 0, "x", -80);

  // Open/Close user profile
  const {
    isOpen: isUserInfoOpen,
    openMenu: openUserInfo,
    closeMenu: closeUserInfo,
    menuRef: userInfoRef,
  } = useAnimatedMenu("x", 200, "x", 0, "x", 0, "x", 200);

  const {
    isOpen: isUserProfileOpen,
    openMenu: openProfile,
    closeMenu: closeProfile,
    menuRef: userProfileRef,
  } = useAnimatedMenu("x", 200, "x", 0, "x", 0, "x", 200);

  const authUser = useSelector((state) => state.user.user);

  const handleLogout = async () => {
    const res = await authService.logout();
    if (res.data.sucess === true) {
      console.log(res.data.message);
    } else {
      console.log(res.data.error);
    }

    // Dispatch the logout action
    dispatch(logout());
  };

  const handleSubmit = async () => {};

  return (
    <nav className="w-full lg:w-11/12 lg:rounded-b-xl py-0 flex items-center justify-center text-sm sticky top-0 navbar drop-shadow bg-white !z-50">
      {/* Mobile Navigation */}
      <div className="w-full flex h-16 items-center justify-between border-b border-slate-50 px-4 bg-white !z-50">
        <div className="flex items-center relative w-full justify-between">
          <Link to="/">
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-200"></div>
              <span className="text-lg font-semibold orange_gradient">
                Adventures Blogs
              </span>
            </div>
          </Link>
          <div className="w-7 h-7 drop-shadow shadow absolute sm:hidden flex-center flex-col top-12 -left-4">
            <ul className="mx-auto cursor-pointer" onClick={openHamburger}>
              <li className="rounded-lg h-1 w-5 mx-auto bg-slate-600 my-[2px]"></li>
              <li className="rounded-lg h-1 w-5 mx-auto bg-slate-600 my-[2px]"></li>
              <li className="rounded-lg h-1 w-5 mx-auto bg-slate-600 my-[2px]"></li>
            </ul>
          </div>

          {isHamburgerOpen && (
            <div
              className="px-3 py-2 drop-shadow shadow absolute top-[50px] -left-4 z-10 bg-slate-50 opacity-0 -translate-x-20 sm:hidden"
              ref={hamburgerRef}
            >
              <div
                className="absolute right-2 top-2 bg-white w-6 h-6 flex-center cursor-pointer hover:bg-slate-50 hover:shadow"
                onClick={closeHamburger}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </div>
              <ul className="gap-x-3 gap-y-3 pl-0 w-36 pt-5 mt-1">
                <Link to="/">
                  <li className="my-1 py-2 pl-2 cursor-pointer transition-all hover:bg-white">
                    Home
                  </li>
                </Link>
                <Link to="/blogs">
                  <li className="my-1 py-2 pl-2 cursor-pointer transition-all hover:bg-white">
                    Blogs
                  </li>
                </Link>
                <Link to="/team">
                  <li className="my-1 py-2 pl-2 cursor-pointer transition-all hover:bg-white">
                    Team
                  </li>
                </Link>
                <Link to="/about">
                  <li className="my-1 py-2 pl-2 cursor-pointer transition-all hover:bg-white">
                    About
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="my-1 py-2 pl-2 cursor-pointer transition-all hover:bg-white">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          )}
          <>
            <div className="hidden sm:block">
              <ul className="flex items-center gap-x-4 md:gap-x-7 lg:gap-x-10">
                <Link to="/">
                  <li
                    className={`desktop-li ${
                      location.pathname === "/" ? "active-nav" : ""
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/blogs">
                  <li
                    className={`desktop-li ${
                      location.pathname === "/blogs" ? "active-nav" : ""
                    }`}
                  >
                    Blogs
                  </li>
                </Link>
                <Link to="/team">
                  <li
                    className={`desktop-li ${
                      location.pathname === "/team" ? "active-nav" : ""
                    }`}
                  >
                    Team
                  </li>
                </Link>
                <Link to="/about">
                  <li
                    className={`desktop-li ${
                      location.pathname === "/about" ? "active-nav" : ""
                    }`}
                  >
                    About
                  </li>
                </Link>
                <Link to="/contact">
                  <li
                    className={`desktop-li ${
                      location.pathname === "/contact" ? "active-nav" : ""
                    }`}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </>
          <>
            {authUser ? (
              <div className="flex items-center gap-x-4 relative">
                <div
                  className="w-8 h-8 bg-orange-500 drop-shadow rounded-full cursor-pointer flex-center"
                  onClick={openUserInfo}
                >
                  {authUser.profilePic ? (
                    <img
                      src={authUser.profilePic}
                      alt="img"
                      className="w-full h-full object-fill"
                    />
                  ) : (
                    <h1 className="text-xl font-bold text-white">
                      {authUser.username[0]}
                    </h1>
                  )}
                </div>

                {isUserInfoOpen && (
                  <ul
                    className="w-56 bg-white overflow-hidden absolute top-12 -right-1 rounded-b-xl shadow-lg shadow-gray-400 translate-x-20"
                    ref={userInfoRef}
                  >
                    <li className="pl-5 pr-2 font-semibold py-4 border-b flex items-center justify-between">
                      <span>{authUser.username}</span>
                      <div
                        className="closeButton2 cursor-pointer flex items-center justify-center"
                        onClick={closeUserInfo}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          width="18"
                          height="18"
                          className=""
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                    </li>
                    <li className="pl-5 pt-2 pb-3 flex items-center gap-2">
                      <button
                        className="flex items-center gap-2 cursor-pointer py-2 px-2 transition-all hover:bg-slate-50"
                        onClick={openProfile}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-gear-fill opacity-60"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                        <span>Account Settings</span>
                      </button>
                      <button
                        className="flex items-center gap-2 cursor-pointer py-2 px-2 transition-all hover:bg-slate-50"
                        title="Logout"
                        onClick={handleLogout}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-right opacity-60"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                )}
                {isUserProfileOpen && (
                  <div
                    className="w-72 sm:w-[450px] h-[550px] rounded-lg shadow-lg absolute top-12 -right-1 px-0 pb-4 cursor-default opacity-0 hidden translate-x-20 z-50"
                    ref={userProfileRef}
                    style={{
                      background: "#f6f6f6",
                    }}
                  >
                    <div className="flex items-center justify-between bg-white px-4 py-4">
                      <h2 className="font-bold">Account Settings</h2>
                      <div
                        className="closeButton2 cursor-pointer flex items-center justify-center"
                        onClick={closeProfile}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          width="18"
                          height="18"
                          className=""
                        >
                          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full h-96 py-3">
                      <div className=" w-11/12 rounded mx-auto h-auto p-4 bg-white pb-10 relative">
                        <form className="text-sm" onSubmit={handleSubmit}>
                          <div className="w-20 h-20 mb-3 rounded-md overflow-hidden border">
                            <img
                              src={authUser.profilePic}
                              alt="user-image"
                              className="w-full h-full object-fit"
                            />{" "}
                          </div>
                          <input
                            type="file"
                            // onChange={handleFileChange}
                            id="profilePicture"
                            name="profilePic"
                            accept="image/*"
                            className="my-2"
                          />
                          <div className="mb-5">
                            <label
                              htmlFor="fullname"
                              className="font-medium ml-1"
                            >
                              Full Name
                            </label>
                            <div className="w-full bg-white border py-1 px-2 rounded-md mt-2">
                              <input
                                type="text"
                                // value={formData.fullname}
                                // onChange={handleChange}
                                id="fullname"
                                name="fullname"
                                placeholder="Full name"
                                className="outline-none bg-transparent border-none w-fill-available"
                              />
                            </div>
                          </div>
                          <div className="mb-5">
                            <label
                              htmlFor="username"
                              className="font-medium ml-1"
                            >
                              User Name
                            </label>
                            <div className="w-full bg-white border py-1 px-2 rounded-md mt-2">
                              <input
                                type="text"
                                // value={formData.username}
                                // onChange={handleChange}
                                id="username"
                                name="username"
                                placeholder="Username"
                                className="outline-none bg-transparent border-none w-fill-available"
                              />
                            </div>
                          </div>
                          <div className="mb-5">
                            <label htmlFor="email" className="font-medium ml-1">
                              Email
                            </label>
                            <div className="w-full bg-white border py-1 px-2 rounded-md mt-2">
                              <input
                                type="text"
                                // value={formData.email}
                                // onChange={handleChange}
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="outline-none bg-transparent border-none w-fill-available"
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-end mt-5">
                            <button type="submit" className="sm">
                              Save
                            </button>
                          </div>
                        </form>
                        <button
                          className={`py-2 w-10 sm:w-28 flex items-center justify-center lg:justify-start gap-x-3 rounded lg:px-4 hover:bg-white hover:drop-shadow text-sm absolute bottom-10`}
                          title="Logout"
                          onClick={handleLogout}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            xlinkTitle="Logout"
                            fill="currentColor"
                            className="bi bi-box-arrow-right cursor-pointer"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                            />
                          </svg>
                          <span className={`hidden sm:block opacity-90`}>
                            Logout
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <LoginSignupButtons />
            )}
          </>
        </div>
      </div>
      {/* DeskTop Navigation */}
    </nav>
  );
};

export default Navbar;

// git config --global user.email chandandev285@gmail.com

function LoginSignupButtons() {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <Link to="/login">
          <button className="btn drop-shadow-sm">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn drop-shadow-sm">Signup</button>
        </Link>
      </div>
    </>
  );
}
