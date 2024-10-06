/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";
import img from "../../assets/images/img.jpg";

const BlogCardInfo = ({
  title,
  desc = "App Development is a process of createing building and maintaining Android and iOS apps.",
  url,
  imageUrl,
  categoryDetails,
  category_bg,
  authorDetails,
  createdAt,
}) => {
  console.log(imageUrl);
  return (
    <>
      {/* <Link to={`/blogs/details/${url}`}>
        <div className="w-[260px] h-[370px] drop-shadow border border-slate-200 shadow-slate-50 rounded-md overflow-hidden cursor-pointer transition-all hover:-translate-y-2 relative bg-white blog_box hover:shadow-lg hover:shadow-slate-300">
          <div
            className={` text-white px-3 py-1 rounded-full absolute right-2 top-2 text-xs border`}
            style={{
              background: `linear-gradient(45deg, ${category_bg}, #000 100px)`,
            }}
          >
            {"Hello"}
          </div>
          <div className="w-full h-40 bg-orange-100 blogImg">
            <img
              src={imageUrl ? imageUrl : img}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="px-3 py-2 ">
            <h2 className="font-semibold text-lg py-1">{title}</h2>
            <p className="text-sm py-1">{desc}</p>
          </div>
          <div className="px-3 pb-3 pt-1 flex items-center absolute bottom-0 w-full blogContent">
            <div className="w-10 h-10 rounded-full bg-red-100 overflow-hidden">
              <img
                src={
                  authorDetails && authorDetails.profilePic
                    ? authorDetails.profilePic
                    : ""
                }
                alt=""
                className="w-full h-full "
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium ">{authorDetails.username}</h3>
              <h3 className="text-sm font-medium ">Chandan</h3>
              <small className="text-xs">{createdAt}</small>
            </div>
          </div>
        </div>
      </Link> */}

      <div className="p-4 md:w-1/2 lg:w-1/3 text-sm">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Link to={`/blogs/details/${url}`}>
            <img
              className="lg:h-48 md:h-48 w-full object-cover object-center"
              src={
                imageUrl != null || imageUrl !== undefined
                  ? imageUrl
                  : "https://dummyimage.com/720x400"
              }
              alt="blog"
            />
          </Link>
          <div className="px-4 py-3">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <Link to={`/blogs/details/${url}`}>
              <h1 className="title-font text-base font-semibold text-gray-900 mb-2">
                {title}
              </h1>
            </Link>
            <p className="leading-relaxed mb-3 text-sm">{desc}</p>
            <div className="flex items-center flex-wrap justify-between">
              <Link
                to={`/blogs/details/${url}`}
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCardInfo;

BlogCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
