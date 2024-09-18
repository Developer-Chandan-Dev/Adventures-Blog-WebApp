import { Link } from "react-router-dom";
import useAnimatedMenu from "../hooks/useAnimatedMenu";

const Navbar = () => {
  const {
    isOpen: isHamburgerOpen,
    openMenu: openHamburger,
    closeMenu: closeHamburger,
    menuRef: hamburgerRef,
  } = useAnimatedMenu("x", -80, "x", 0, "x", 0, "x", -80);

  return (
    <nav className="w-full py-0 flex items-center justify-center text-sm sticky top-0 navbar drop-shadow bg-white !z-50">
      {/* Mobile Navigation */}
      <div className="w-full flex h-16 items-center justify-between sm:hidden border-b border-slate-50 px-4 bg-white !z-50">
        <div className="flex items-center relative">
          <div className="flex items-center gap-x-2">
            <div className="w-8 h-8 rounded-full bg-orange-200"></div>
            {/* <span className="text-lg font-semibold orange_gradient">
              Adventures Blogs
            </span> */}
          </div>
          <div className="w-7 h-7 bg-green-400 absolute flex-center flex-col top-12 -left-4">
            <ul className="mx-auto cursor-pointer" onClick={openHamburger}>
              <li className="rounded-lg h-1 w-5 mx-auto bg-gray-100 my-[2px]"></li>
              <li className="rounded-lg h-1 w-5 mx-auto bg-gray-100 my-[2px]"></li>
              <li className="rounded-lg h-1 w-5 mx-auto bg-gray-100 my-[2px]"></li>
            </ul>
          </div>
          {isHamburgerOpen && (
            <div className="px-3 py-2 drop-shadow shadow absolute top-[50px] -left-4 z-10 bg-slate-50 opacity-0 -translate-x-20 sm:hidden">
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
              <ul
                className="gap-x-3 gap-y-3 pl-0 w-36 pt-5 mt-1"
                ref={hamburgerRef}
              >
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
                <Link to="/community">
                  <li className="my-1 py-2 pl-2 cursor-pointer transition-all hover:bg-white">
                    Community
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
        </div>
        <div className="w-8 h-8 bg-green-200 rounded-full cursor-pointer"></div>
      </div>
      {/* DeskTop Navigation */}
      <div className="w-full items-center h-16 justify-between hidden sm:flex md:px-10 lg:px-20 border-b border-slate-50 px-3 bg-white !z-50">
        <div className="flex items-center gap-x-3 md:gap-x-5">
          <div className="w-8 h-8 rounded-full bg-orange-200"></div>
          <span className="text-lg font-semibold orange_gradient ">
            Adventures Blogs
          </span>
        </div>
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
          <Link to="/community">
            <li
              className={`desktop-li ${
                location.pathname === "/community" ? "active-nav" : ""
              }`}
            >
              Community
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
        <div className="w-8 h-8 bg-green-200 rounded-full cursor-pointer"></div>
      </div>
    </nav>
  );
};

export default Navbar;

// git config --global user.email chandandev285@gmail.com