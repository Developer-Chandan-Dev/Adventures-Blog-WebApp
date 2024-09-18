import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";

const BlogCardInfo = ({
  title,
  desc,
  url,
  imageUrl,
  category,
  category_bg,
  author,
  createdAt,
}) => {

  return (
    <>
      <Link to="/blogs/details">
        <div className="w-[260px] h-[370px] drop-shadow border border-slate-200 shadow-slate-50 rounded-md overflow-hidden cursor-pointer transition-all hover:-translate-y-2 relative bg-white blog_box hover:shadow-lg hover:shadow-slate-300">
          <div
            className={` text-white px-3 py-1 rounded-full absolute right-2 top-2 text-xs`}
            style={{
              background: `linear-gradient(45deg, ${category_bg}, #000 100px)`,
            }}
          >
            {category}
          </div>
          <div className="w-full h-40 bg-orange-100 blogImg">
            <img src={imageUrl} className="w-full h-full" alt="" />
          </div>
          <div className="px-3 py-2 ">
            <h2 className="font-semibold text-lg py-1">{title}</h2>
            <p className="text-sm py-1">{desc}</p>
          </div>
          <div className="px-3 pb-3 pt-1 flex items-center absolute bottom-0 w-full blogContent">
            <div className="w-10 h-10 rounded-full bg-red-100"></div>
            <div className="ml-3">
              <h3 className="text-sm font-medium ">{author}</h3>
              <small className="text-xs">{createdAt}</small>
            </div>
          </div>
        </div>
      </Link>
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
