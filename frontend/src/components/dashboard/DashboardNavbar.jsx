import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const authUser = useSelector((state) => state.user.user);

  return (
    <nav className="w-full h-[10vh] bg-white drop-shadow z-20 flex items-center justify-between px-5 py-2">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <div className="flex-center gap-x-4 cursor-default">
        <span>{authUser.role}</span>
        <Link to="/dashboard/settings">
          <div className="w-8 h-8 rounded-full border drop-shadow-sm flex-center bg-[crimson] cursor-pointer">
            {authUser.profilePic ? (
              <img
                src={authUser.profilePic}
                alt="img"
                className="w-full h-full object-fill"
              />
            ) : (
              <span className="font-semibold text-lg text-white">
                {authUser.username[0]}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
