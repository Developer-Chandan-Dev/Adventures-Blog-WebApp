import img1 from "../../assets/1.jpg";
import BlogPageSidebar from "../../components/blogs/BlogPageSidebar";
import BlogForm from "../../components/blogs/BlogForm";
import BlogTags from "../../components/blogs/BlogTags";
import RelatedTopics from "../../components/blogs/RelatedTopics";
import BlogContent from "../../components/blogs/BlogContent";

const BlogDetailsPage = () => {
  return (
    <section className="w-full relative ">
      {/* <Navbar /> */}
      <section className="w-full px-2h-auto relative flex py-4 flex-col ">
        <div className=" sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto">
          <div>
            <h1 className="head_text !text-3xl py-5 !text-gray-900 drop-shadow">
              There will title of your blog post
            </h1>
            <ul>
              <li className="text-gray-500 pb-4 text-sm">
                By Default User - Published in Default Category - April 7 2024 -{" "}
                <span className="text-orange-600">2 Min Read</span>
              </li>
            </ul>
          </div>
          <div className="mx-auto w-full flex gap-x-4 justify-between">
            <div className="w-[70%] h-auto px-5 py-5 bg-white rounded-md drop-shadow">
              <div className="w-full h-auto bg-gradient-to-r mx-auto rounded-md overflow-hidden">
                <img src={img1} alt="banner image" className="w-full h-auto" />
              </div>

              <BlogContent />
              <BlogTags />
              <RelatedTopics />
              <div className="py-5 px-2 flex items-center justify-between ">
                <div className="px-5 py-2 drop-shadow transition-all cursor-pointer hover:shadow hover:shadow-gray-400 rounded-full flex-center gap-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="#5a5a5a"
                    width="16"
                    height="16"
                  >
                    <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
                  </svg>
                  <span className="text-[#5a5a5a]">Previous</span>
                </div>
                <div className="px-5 py-2 drop-shadow transition-all cursor-pointer hover:shadow hover:shadow-gray-400 rounded-full flex-center gap-x-2">
                  <span className="text-[#5a5a5a]">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    width="16"
                    height="16"
                    fill="#5a5a5a"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                  </svg>
                </div>
              </div>
              <BlogForm />
              <div className="py-5 px-2">
                <h2 className="py-8 text-2xl font-semibold pl-3 relative after:absolute after:w-[6px] after:h-8 after:bg-red-200 after:left-0">
                  Added Comments
                </h2>
              </div>
            </div>
            <BlogPageSidebar />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </section>
  );
};

export default BlogDetailsPage;
