import { useEffect, useState } from "react";
import BlogCardInfo from "./BlogCardInfo";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

const BlogCard = () => {
  const [data, setData] = useState([]);

  const fetchedData = [
    {
      _id: 1,
      title: "Web Development",
      desc: "Web Development is a process of createing building and maintaining website and web applications.",
      url: `http://localhost:5173/blogs/`,
      imageUrl: img1,
      category: "Web Development",
      category_bg: "crimson",
      author: "Shiva Kumar",
      createdAt: "12/05/2024",
    },
    {
      _id: 2,
      title: "App Development",
      desc: "App Development is a process of createing building and maintaining Android and iOS apps.",
      url: `http://localhost:5173/blogs/`,
      imageUrl: img2,
      category: "App Development",
      category_bg: "cyan",
      author: "Rajeev Kumar",
      createdAt: "11/02/2024",
    },
    {
      _id: 3,
      title: "Cyber Security",
      desc: "Cyber Security is a security for devices that are connected to internet.",
      url: `http://localhost:5173/blogs/`,
      imageUrl: img3,
      category: "Cyber Security",
      category_bg: "blue",
      author: "Chadnan Dev",
      createdAt: "05/03/2024",
    },
    {
      _id: 4,
      title: "What's Computer?",
      desc: "App Development is a process of createing building and maintaining Android and iOS apps.",
      url: `http://localhost:5173/blogs/`,
      imageUrl: img4,
      category: "App Development",
      category_bg: "cyan",
      author: "Rajeev Kumar",
      createdAt: "11/02/2024",
    },
  ];

  useEffect(() => {
    const data = [];
    fetchedData.forEach((element) => {
      data.push(element);
    });
    setData(data);
  }, []);

  return (
    <>
      {data != null
        ? data.map(
            ({
              _id,
              title,
              desc,
              url,
              imageUrl,
              category,
              category_bg,
              author,
              createdAt,
            }) => (
              <BlogCardInfo
                key={_id}
                title={title}
                desc={desc}
                url={url}
                category={category}
                category_bg={category_bg}
                imageUrl={imageUrl}
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
