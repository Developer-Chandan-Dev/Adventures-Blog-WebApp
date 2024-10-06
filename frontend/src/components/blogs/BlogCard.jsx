/* eslint-disable react/prop-types */
import BlogCardInfo from "./BlogCardInfo";

const BlogCard = ({ data }) => {

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
              category_bg,
              author,
              createdAt,
            }) => (
              <BlogCardInfo
                key={_id}
                title={title}
                desc={desc}
                url={slug}
                category={category}
                category_bg={category_bg}
                imageUrl={coverImage}
                author={author}
                createdAt={createdAt}
              />
            )
          )
        : ""}
    </>
  );
};

export default BlogCard;
