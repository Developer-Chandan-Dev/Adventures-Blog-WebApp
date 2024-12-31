/* eslint-disable react/prop-types */

const StatCard = ({ name = "Name", icon: Icon, value, color }) => {
  return (
    <div className="bg-gray-80 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-gray-100 transition-all hover:-translate-y-1 hover:bg-white">
      <div className="px-4 py-5 sm:p-6 ">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 font-semibold text-gray-600 text-3xl ">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
