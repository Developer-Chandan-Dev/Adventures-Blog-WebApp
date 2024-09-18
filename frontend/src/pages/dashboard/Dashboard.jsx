import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardBlogsPage from "./DashboardBlogsPage";
import DashboardPage from "./DashboardPage";
import AddBlogs from "./AddBlogs";
import Settings from "./Settings";
import PendingBlogs from "./PendingBlogs";
import { useState } from "react";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <section className="w-full bg-[#f7fcfc]">
      <DashboardNavbar />
      <div className="flex h-[90vh]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <section
          className={`w-[93.5vw] lg:${
            sidebar === true ? "w-[93.5vw]" : "w-[82vw]"
          } h-[90vh] bg-[#f7fcfc] overflow-auto pb-5`}
        >
          <Outlet>
            <DashboardPage />
            <DashboardBlogsPage />
            <AddBlogs />
            <Settings />
            <PendingBlogs />
          </Outlet>
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
