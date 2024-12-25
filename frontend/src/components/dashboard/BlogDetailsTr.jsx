import { Link } from "react-router-dom";
import { formatDate } from "../utlity/dateUtils";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useUpdateFeaturedPostAndStatus from "../../hooks/useUpdateFeaturedPostAndStatus";

const BlogDetailsTr = ({
  _id,
  index,
  title,
  slug,
  status,
  author,
  createdAt,
  category,
  featuredBlog,
}) => {
  const [trChange, setTrChange] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [newFeaturedBlog, setNewFeaturedBlog] = useState(false);
  const { handleChangeTrueFalse } = useUpdateFeaturedPostAndStatus();

  useEffect(() => {
    setNewStatus(status);
  }, [status]);
  useEffect(() => {
    setNewFeaturedBlog(featuredBlog);
  }, [featuredBlog]);

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
    handleChangeTrueFalse(`/api/v1/blogs/publish/${_id}`);
  };
  const handleFeaturedBlogChange = (e) => {
    setNewFeaturedBlog(e.target.value);
    handleChangeTrueFalse(`/api/v1/blogs/featuredPost/${_id}`);
  };

  return (
    <>
      <tr className="w-full h-12 cursor-pointer hover:shadow border-b  hover:bg-gray-50 text-gray-500">
        <td className="px-4 font-medium">{index + 1}</td>
        <td className="px-4">
          {title.length > 20 ? title.slice(0, 20) + ".." : title || "N/A"}
        </td>
        <td className="pl-5">
          {slug.length > 20 ? slug.slice(0, 20) + ".." : slug || "N/A"}
        </td>
        <td className="pl-5">
          <select
            name="status"
            id="status"
            value={newStatus}
            onChange={handleStatusChange}
            className="w-24 border border-slate-200 outline-slate-300 px-2 cursor-pointer py-1 rounded-md pb-1"
          >
            <option className="" value="draft">
              Draft
            </option>
            <option className="" value="published">
              Published
            </option>
          </select>
        </td>
        <td className="px-4 pl-5">
          <select
            name="featuredBlog"
            id="featuredBlog"
            value={newFeaturedBlog}
            onChange={handleFeaturedBlogChange}
            className="w-24 border border-slate-200 outline-slate-300 px-2 cursor-pointer py-1 rounded-md pb-1"
          >
            <option className="" value="true">
              Yes
            </option>
            <option className="" value="false">
              No
            </option>
          </select>
        </td>
        <td className="pl-5">{author?.username || "N/A"}</td>
        <td className="pl-5">
          {formatDate(createdAt !== null && createdAt) || "N/A"}
        </td>
        <td className="pl-5">{category?.name || "N/A"}</td>
        <td className="pl-">
          <div className="flex items-center ml-4 gap-x-3">
            <div title="Edit Blog">
              <Link to={`/dashboard/blogs/pending/update/${_id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="16"
                  height="16"
                  className="bi bi-trash3 opacity-60 transition-all hover:opacity-90"
                  fill="red"
                >
                  <path d="M383.1 448H63.1V128h156.1l64-64H63.1C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 63.1 64h319.1c35.34 0 63.1-28.65 63.1-64l-.0039-220.1l-63.1 63.99V448zM497.9 42.19l-28.13-28.14c-18.75-18.75-49.14-18.75-67.88 0l-38.62 38.63l96.01 96.01l38.62-38.63C516.7 91.33 516.7 60.94 497.9 42.19zM147.3 274.4l-19.04 95.22c-1.678 8.396 5.725 15.8 14.12 14.12l95.23-19.04c4.646-.9297 8.912-3.213 12.26-6.562l186.8-186.8l-96.01-96.01L153.8 262.2C150.5 265.5 148.2 269.8 147.3 274.4z" />
                </svg>
              </Link>
            </div>
            {/* <span className="text-red-400 text-xl">|</span> */}
            <div title="Delete blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                className="bi bi-trash3 opacity-60 transition-all hover:opacity-90"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </div>
            {/* <span className="text-red-400 text-xl">|</span> */}
            <Link to={`/blogs/details/${slug}`} target="_blank">
              <button className="px-3 py-1 border rounded-md transition-all hover:drop-shadow">Visit</button>
            </Link>
          </div>
        </td>
      </tr>
      {trChange && (
        <tr className="">
          <td colSpan={9} className=" py-[6px] px-4">
            <button className="w-24 border border-slate-200 px-2 cursor-pointer py-2 rounded-md bg-green-100 transition-all hover:bg-green-200">
              Update
            </button>
            <button className="w-24 border border-slate-200 px-2 cursor-pointer py-2 rounded-md bg-red-100 ml-2 transition-all hover:bg-red-300">
              Cancel
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default BlogDetailsTr;

BlogDetailsTr.propTypes = {
  _id: PropTypes.slug,
  title: PropTypes.string,
  slug: PropTypes.slug,
  index: PropTypes.number,
  status: PropTypes.status,
  author: PropTypes.object,
  createdAt: PropTypes.string,
  category: PropTypes.object,
  featuredBlog: PropTypes.bool,
};
