/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Container } from "../index";

// eslint-disable-next-line react/prop-types
const PopularCategories = ({ categories }) => {
  console.log(categories);
  return (
    <Container className="!py-20">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Popular Categories
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              These are popular categories available on our website. You can
              explore our other categories and category related posts by
              clicking on Explore. Please check out one time.
            </p>
          </div>
          <div className="flex flex-wrap">
            {Array.isArray(categories) && categories?.length > 0
              ? categories?.map(({ name, description, _id }) => (
                  <div
                    key={_id}
                    className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
                  >
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      {name}
                    </h2>
                    <p className="leading-relaxed text-base mb-4">
                      {description
                        ? description
                        : `Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.`}
                    </p>
                    <a
                      href={`blogs/categories/${_id}`}
                      className="text-indigo-500 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                ))
              : "Categories not found"}
          </div>
          <Link to="/blogs/categories">
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Explore...
            </button>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default PopularCategories;
