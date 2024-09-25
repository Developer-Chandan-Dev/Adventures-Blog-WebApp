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
  console.log(sidebar);

  return (
    <section className="w-full bg-[#f7fcfc]">
      <DashboardNavbar />
      <div className="flex h-[90vh]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <section
          className={`w-[93.5vw] ${
            sidebar === true ? "lg:w-[93.5vw]" : "lg:w-[82vw]"
          } h-[90vh] bg-[#f7fcfc] overflow-auto pb-5 ${
            sidebar === true ? "bg-green-200" : "bg-yellow-200"
          }`}
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
