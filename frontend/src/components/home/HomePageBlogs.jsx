import "./style.css";
import BlogCard from "../blogs/BlogCard";

const HomePageBlogs = () => {
  return (
    <>
      <h1 className="text-2xl pb-8 pt-2 border-b-4 border-orange-300 font-semibold text-center px-3 w-64 mt-5 mx-auto h_2 relative">
        Latest <span className="orange_gradient">Blogs</span>
      </h1>
      <section className="w-full sm:w-11/12 lg:w-[85%] px-2 p-5 h-auto mx-auto mt-10 gap-x-4 gap-y-7 flex items-center flex-wrap blogContainer">
        <BlogCard />
      </section>
    </>
  );
};

export default HomePageBlogs;
