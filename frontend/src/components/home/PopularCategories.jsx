import { Link } from "react-router-dom";
import { Container } from "../index";

const PopularCategories = () => {
  return (
    <Container className="!py-20">
      <div className="flex-center gap-x-4 gap-y-4 flex-wrap">
        <div className="w-80 h-20 rounded-md border flex items-center justify-start gap-x-2 shadow bg-white">
          <div className="w-16 h-16 border mx-2 rounded"></div>
          <div className="w-64 ">
            <h2 className="text-xl font-semibold text-gray-700">
              Web Development
            </h2>
            <Link>
              <button className="text-sm py-1 text-orange-400 underline">
                Expore...
              </button>
            </Link>
          </div>
        </div>
        <div className="w-80 h-20 rounded-md border flex items-center justify-start gap-x-2 shadow bg-white">
          <div className="w-16 h-16 border mx-2 rounded"></div>
          <div className="w-64 ">
            <h2 className="text-xl font-semibold text-gray-700">
              Cyber Security
            </h2>
            <Link>
              <button className="text-sm py-1 text-orange-400 underline">
                Expore...
              </button>
            </Link>
          </div>
        </div>
        <div className="w-80 h-20 rounded-md border flex items-center justify-start gap-x-2 shadow bg-white">
          <div className="w-16 h-16 border mx-2 rounded"></div>
          <div className="w-64 ">
            <h2 className="text-xl font-semibold text-gray-700">
              App Development
            </h2>
            <Link>
              <button className="text-sm py-1 text-orange-400 underline">
                Expore...
              </button>
            </Link>
          </div>
        </div>

      </div>


    </Container>
  );
};

export default PopularCategories;
