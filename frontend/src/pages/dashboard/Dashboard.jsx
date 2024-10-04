import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardBlogsPage from "./DashboardBlogsPage";
import DashboardPage from "./DashboardPage";
import AddBlogs from "./AddBlogs";
import Settings from "./Settings";
import PendingBlogs from "./PendingBlogs";
import { useSelector } from "react-redux";
import Users from "./Users";

const Dashboard = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  console.log(isSidebarOpen);

  return (
    <section className="w-full bg-[#f7fcfc]">
      <DashboardNavbar />
      <div className="flex h-[90vh]">
        <Sidebar />
        <section
          className={`w-[93.5vw] ${
            isSidebarOpen === true ? "lg:w-[93.5vw]" : "lg:w-[82vw]"
          } h-[90vh] bg-[#f7fcfc] overflow-auto pb-5`}
        >
          <Outlet>
            <DashboardPage />
            <DashboardBlogsPage />
            <AddBlogs />
            <Settings />
            <PendingBlogs />
            <Users/>
          </Outlet>
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
