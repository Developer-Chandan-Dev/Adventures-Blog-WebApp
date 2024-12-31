import {
  ArrowsUpFromLine,
  ChartBarStacked,
  GitPullRequestDraft,
  UsersIcon,
} from "lucide-react";
import StatCard from "../../components/dashboard/common/StatsCard";
import { Link } from "react-router-dom";
import BlogsOverviewChart from "../../components/dashboard/dashboard/BlogsOverviewChart";

const DashboardPage = () => {
  const userStats = {
    totalUsers: 152845,
    newUsersToday: 243,
    activeUsers: 98520,
    churnRate: "2.4%",
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-20">
      <div className="w-full py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[crimson]">Blogs</span> Dashboard
          </h1>
          <h4 className="text-[crimson] text-base font-semibold">
            ADMIN PANEL
          </h4>
        </div>
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="crimson"
            className="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
          </svg>{" "}
          <span className="text-[crimson] text-semibold text-sm font-bold">
            /
          </span>{" "}
          <span className="text-[crimson] text-semibold font-semibold">
            Dashboard
          </span>
        </div>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-1 gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 1 }}
        // transition={{ duration: 1 }}
      >
        <Link to="/dashboard/blogs">
          <StatCard
            name="Total Posts"
            icon={ArrowsUpFromLine}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
        </Link>
        <Link to="/dashboard/users">
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.newUsersToday.toLocaleString()}
            color="#108981"
          />
        </Link>
        <Link to="/dashboard/blogs/pending">
          <StatCard
            name="Draft Posts"
            icon={GitPullRequestDraft}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E08"
          />
        </Link>
        <Link to="/dashboard/category">
          <StatCard
            name="Total Categories"
            icon={ChartBarStacked}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </Link>
      </div>

      {/* <DashboardCards /> */}
        <BlogsOverviewChart />
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BlogsOverviewChart />
        <BlogsOverviewChart />
      </div> */}
      {/* <div className="flex items-center justify-between flex-wrap mt-10 mb-5">
        <div className="w-[30%] h-96 bg-green-100 rounded-3xl"></div>
      </div> */}
    </section>
  );
};

export default DashboardPage;
