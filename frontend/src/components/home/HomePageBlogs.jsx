/* eslint-disable react/prop-types */
import "./style.css";
import BlogCard from "../blogs/BlogCard";
import BlogCardInfo from "../blogs/BlogCardInfo";

const HomePageBlogs = ({ latestPosts }) => {
  console.log(latestPosts);
  return (
    <>
      <h1 className="text-2xl pb-8 pt-2 border-b-4 border-orange-300 font-semibold text-center px-3 w-64 mt-5 mx-auto h_2 relative">
        Latest <span className="orange_gradient">Blogs</span>
      </h1>
      {/* <section className="w-full sm:w-11/12 lg:w-[85%] px-2 p-5 h-auto mx-auto gap-x-4 gap-y-7 flex items-center flex-wrap blogContainer"> */}
        <section className="text-gray-600 body-font w-full sm:w-11/12 lg:w-[85%] mx-auto">
          <div className="container px-5 pt-0 pb-14 mx-auto">
            <div className="flex flex-wrap -m-4">
              {latestPosts !== null
                ? // eslint-disable-next-line react/prop-types
                  latestPosts.map(
                    ({
                      _id,
                      title,
                      coverImage,
                      authorDetails,
                      categoryDetails,
                      slug,
                      createdAt,
                    }) => (
                      <BlogCardInfo
                        key={_id}
                        id={_id}
                        slug={slug}
                        title={title}
                        coverImage={coverImage}
                        authorDetails={authorDetails}
                        categoryDetails={categoryDetails}
                        url={slug}
                        createdAt={createdAt}
                      />
                    )
                  )
                : ""}

              <BlogCard />
            </div>
          </div>
        </section>
      {/* </section> */}
    </>
  );
};

export default HomePageBlogs;
