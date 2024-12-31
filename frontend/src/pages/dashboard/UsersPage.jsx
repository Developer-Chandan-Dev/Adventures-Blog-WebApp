import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import useFetchData from "../../hooks/useFetchData";
import StatCard from "../../components/dashboard/common/StatsCard";
import UsersTable from "../../components/dashboard/users/UsersTable";
import ChangeUserDetailsPopup from "../../components/dashboard/users/ChangeUserDetailsPopup";
import { useState } from "react";

const UsersPage = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const { data, error, loading } = useFetchData("/api/v1/users");

  const userStats = {
    totalUsers: 152845,
    newUsersToday: 243,
    activeUsers: 98520,
    churnRate: "2.4%",
  };

  const handleEditClick = (user) => {
    setSelectedUser(user); // Set the selected user details
    setIsPopupActive(true); // Activate the popup
  };
  return (
    <section className="max-w-7xl mx-auto pt-6 px-6 lg:px-8 xl:px-20">
      <div className="w-full flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[crimson]">Users</span> Control
          </h1>
          <h4 className="text-[crimson] text-base font-semibold">
            ADMIN PANEL
          </h4>
        </div>
        <div className="flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="crimson"
            viewBox="0 0 640 512"
          >
            <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
          </svg>
          <span className="text-[crimson] text-semibold text-sm font-bold">
            /
          </span>{" "}
          <span className="text-[crimson] text-semibold font-semibold">
            Users
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
        <StatCard
          name="Total Users"
          icon={UsersIcon}
          value={userStats.totalUsers.toLocaleString()}
          color="#6366F1"
        />
        <StatCard
          name="New Users Today"
          icon={UserPlus}
          value={userStats.newUsersToday.toLocaleString()}
          color="#108981"
        />
        <StatCard
          name="Active Users"
          icon={UserCheck}
          value={userStats.activeUsers.toLocaleString()}
          color="#F59E08"
        />
        <StatCard
          name="Churn Rate"
          icon={UserX}
          value={userStats.churnRate}
          color="#EF4444"
        />
      </div>

      <UsersTable
        onEditClick={handleEditClick}
        data={data && data}
        error={error && error}
        loading={loading && loading}
      />
      {isPopupActive && (
        <ChangeUserDetailsPopup
          user={selectedUser}
          onClose={() => setIsPopupActive(false)}
        />
      )}
    </section>
  );
};

export default UsersPage;
