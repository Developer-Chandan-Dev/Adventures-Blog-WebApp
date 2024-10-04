import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamMembersSection = () => {
  const data = ["Hello", "Hi", "Sai", "Bye", "Weep", "Sleep", "Dark", "Light"];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="px-5 ">
        <h1 className="text-2xl pb-8 pt-2 border-b-4 font-semibold text-center px-3 w-64 mt-5 mx-auto h_2 relative">
          Our Community <span className="orange_gradient">Members</span>
        </h1>
        <div className="h-[400px] w-full flex-center">
          <div className="mt-10 w-11/12 px-5 mx-auto gap-x-5 py-1">
            <Slider {...settings}>
              {data != null
                ? data.map((index, value) => (
                    <div
                      className="!w-80 text-center h-72 border !mx-auto drop-shadow-md px-4 py-6 !flex items-center justify-center flex-col rounded"
                      key={index}
                    >
                      <div className="w-24 h-24 rounded-full bg-blue-600 "></div>
                      <h1 className="py-2 font-bold text-xl text-slate-700">User Name</h1>
                      <p className="text-gray-600 pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt, facere.
                      {data[value]}
                      </p>

                    </div>
                  ))
                : ""}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembersSection;
