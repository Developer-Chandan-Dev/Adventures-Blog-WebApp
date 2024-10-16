import FeaturedBlog from "./FeaturedBlog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedBlogs = ({ featuredPosts = [] }) => {

  console.log(featuredPosts);

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
  return (
    <>
      <h1 className="text-2xl pb-8 pt-2 border-b-4 border-orange-300 font-semibold text-center px-3 w-64 mt-5 mx-auto h_2 relative">
        Featured <span className="orange_gradient">Blogs</span>
      </h1>
      <section className="w-[90%] mx-auto sm:w-[88%] md:w-[85%] px-2 mt-10 p-5 gap-x-2 h-auto blogContainer">
        {/* <Slider {...settings}>
          {Array.isArray(featuredPosts) && featuredPosts.length > 0
            ? featuredPosts.map(
                ({ _id, title, author, createdAt, coverImage, slug }) => (
                  <FeaturedBlog
                    key={_id}
                    id={_id}
                    title={title}
                    author={author}
                    slug={slug}
                    createdAt={createdAt}
                    imageUrl={coverImage}
                  />
                )
              )
            : "Featured Posts not found"}
        </Slider> */}

        <Slider {...settings}>
        {Array.isArray(featuredPosts) && featuredPosts.length > 0
          ? featuredPosts.map(
              ({ _id, title, author, createdAt, coverImage, slug }) => (
                <FeaturedBlog
                  key={_id}
                  id={_id}
                  title={title}
                  author={author}
                  slug={slug}
                  createdAt={createdAt}
                  imageUrl={coverImage}
                />
              )
            )
          : "Featured Posts not found"}
        </Slider>
      </section>
    </>
  );
};

export default FeaturedBlogs;
