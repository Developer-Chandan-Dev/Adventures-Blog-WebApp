/* eslint-disable react/prop-types */
import BlogCardInfo from "./BlogCardInfo";

const BlogCard = ({ data }) => {
  console.log(data);

  return (
    <>
      {data && data.posts != null
        ? data.posts.map(
            ({
              _id,
              title,
              desc,
              slug,
              coverImage,
              category,
              // category_bg,
              excerpt,
              createdAt,
              views,
              comments,
            }) => (
              <BlogCardInfo
                key={_id}
                title={title}
                desc={desc}
                url={slug}
                category={category}
                // category_bg={category_bg}
                excerpt={excerpt}
                imageUrl={coverImage}
                createdAt={createdAt}
                views={views}
                comments={comments}
              />
            )
          )
        : ""}
    </>
  );
};

export default BlogCard;
