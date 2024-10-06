/* eslint-disable react/prop-types */
import DOMPurify from "dompurify";

const BlogContent = ({ title, content }) => {
  return (
    <div className="py-5">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>

      {/* <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      ></div> */}
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      ></div>
    </div>
  );
};

export default BlogContent;
