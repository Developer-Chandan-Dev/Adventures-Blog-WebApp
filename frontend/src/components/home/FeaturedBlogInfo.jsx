import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeaturedBlogInfo = ({
  id,
  title,
  author,
  authorPic,
  createdAt,
  imageUrl,
}) => {
    return (
    <>
    <Link to="/blogs/details">
      <div className="w-52 mx-auto h-60 rounded-xl shadow-md shadow-slate-200 overflow-hidden relative cursor-pointer">
        <img src={imageUrl} className="w-full h-full absolute -z-[1] opacity-75" alt="banner url" />
        <div className="flex-center h-44 px-3 flex-col text-white z-10">
          <div className="w-44 p-2 text-center mx-auto drop-shadow-md ">
            <span className="w-full text-xs drop-shadow-lg">{createdAt}</span>
            <h1 className="text-center pt-3 drop-shadow-lg">{title}</h1>
          </div>
        </div>
        <div className="h-14 w-full absolute bottom-0 flex items-center justify-start px-5 text-white">
          <div className="w-8 h-8 rounded-full bg-slate-50 overflow-hidden drop-shadow-md">
            <img src={imageUrl} alt="" className="w-full h-full" />
          </div>
          <span className="text-xs ml-2 drop-shadow-md">{author}</span>
        </div>
      </div>
      </Link>
    </>
  );
};

export default FeaturedBlogInfo;

FeaturedBlogInfo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorPic: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  //   imageUrl: PropTypes.string.isRequired,
};
