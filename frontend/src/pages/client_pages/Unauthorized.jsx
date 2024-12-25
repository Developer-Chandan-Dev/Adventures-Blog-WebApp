import { Link } from "react-router-dom";
const Unauthorized = () => {
  return (
    <div className="w-screen h-screen flex-center">
      <div className="px-5 py-6 border drop-shadow bg-white rounded-md text-center">
        <p className="text-red-700 py-4">You have not access to explore dashboard.</p>
        <Link to="/" className="text-blue-500 underline transition-colors hover:text-blue-600">Go back to Home</Link>
      </div>
    </div>
  );
};

export default Unauthorized;
