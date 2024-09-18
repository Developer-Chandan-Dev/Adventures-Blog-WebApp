import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

import FeaturedBlogInfo from "./FeaturedBlogInfo";
const FeaturedBlog = () => {
  const [data, setData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000, // Comment this for swipe one by one
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const featuredBlogData = [
    {
      id: "1",
      title: "Best NPM Packages",
      author: "Chandan",
      authorPic: "pic1.jpg",
      createdAt: "10/12/2023",
      imageUrl: img1,
    },
    {
      id: "2",
      title: "Best NPM Packages",
      author: "Shiva",
      authorPic: "pic1.jpg",
      createdAt: "10/12/2023",
      imageUrl: img2,
    },
    {
      id: "3",
      title: "Best NPM Packages",
      author: "Kundan",
      authorPic: "pic1.jpg",
      createdAt: "10/12/2023",
      imageUrl: img3,
    },
    {
      id: "4",
      title: "Best NPM Packages",
      author: "Shiva",
      authorPic: "pic1.jpg",
      createdAt: "10/12/2023",
      imageUrl: img4,
    },
    {
      id: "5",
      title: "Best NPM Packages",
      author: "Jitesh",
      authorPic: "pic1.jpg",
      createdAt: "10/12/2023",
      imageUrl: img1,
    },
    {
      id: "6",
      title: "Best NPM Packages",
      author: "Shailesh",
      authorPic: "pic1.jpg",
      createdAt: "10/12/2023",
      imageUrl: img2,
    },
  ];
  useEffect(() => {
    const data = [];
    featuredBlogData.forEach((element) => {
      if (element != null) {
        data.push(element);
      }
    });

    setData(data);
  }, []);

  console.log(data);
  return (
    <>
      <Slider {...settings}>
        {data != null
          ? data.map(
              ({ id, title, author, authorPic, createdAt, imageUrl }) => (
                <FeaturedBlogInfo
                  key={id}
                  id={id}
                  title={title}
                  author={author}
                  authorPic={authorPic}
                  createdAt={createdAt}
                  imageUrl={imageUrl}
                />
              )
            )
          : ""}
      </Slider>
    </>
  );
};

export default FeaturedBlog;
