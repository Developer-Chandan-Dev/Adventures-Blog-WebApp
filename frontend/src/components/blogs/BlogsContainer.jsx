import BlogCard from "./BlogCard";

const BlogsContainer = () => {
  return (
    <>
      <section className="w-full sm:w-11/12 lg:w-[85%] px-2 p-5 h-auto mx-auto">
        <div className=" bg-white drop-shadow-sm rounded-t-full px-10 pt-2">
          <h1 className="text-3xl pb-2 pt-2 border-b-4 border-orange-300 font-semibold text-center px-3 w-48 mx-auto relative">
            Our <span className="orange_gradient">Blogs</span>
          </h1>
          <ul className="w-full h-14 pt-5 flex items-center justify-start gap-x-2 text-[15px]">
            <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 category_li border-b-2 border-slate-400">
              Recents
            </li>
            <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 category_li border-b-2 border-transparent">
              Design
            </li>
            <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 category_li border-b-2 border-transparent">
              Sports
            </li>
            <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 category_li border-b-2 border-transparent">
              Technology
            </li>
            <li className="py-2 px-3 cursor-pointer transition-all hover:border-slate-400 category_li border-b-2 border-transparent">
              Gaming
            </li>
          </ul>
        </div>
        <section className="px-1 py-5 gap-x-4 gap-y-7 flex items-center h-auto flex-wrap blogContainer">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
      </section>
    </>
  );
};

export default BlogsContainer;
