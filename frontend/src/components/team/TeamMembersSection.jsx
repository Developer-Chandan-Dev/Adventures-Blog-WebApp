import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from "../../hooks/useFetchData";
import Spinner from "../utlity/Spinner";
import TeamMemberCard from "./TeamMemberCard";
import Empty from "../utlity/Empty";
import AuthorCard from "./AuthorCard";

const TeamMembersSection = () => {
  const { data, error, loading } = useFetchData(
    "/api/v1/users/promote/members"
  );
  console.log(data, error, loading);

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
        <div className="h-auto w-full flex-center">
          <div className="mt-10 w-11/12 px-2 sm:px-5 mx-auto gap-x-5 py-1 flex items-center gap-y-5 flex-wrap">
            {data && Array.isArray(data?.authors) && data?.authors.length > 0
              ? data.authors.map((author, index) => (
                  <AuthorCard
                    key={index}
                    name={author.username}
                    _id={author._id}
                    createdAt={author.createdAt}
                    email={author.email}
                  />
                ))
              : ""}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&#39;t heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 w-full mx-auto">
            {error && error}
            {loading && (
              <div className="mx-auto my-5">
                <Spinner />
              </div>
            )}
            {data &&
            Array.isArray(data?.teamMembers) &&
            data.teamMembers.length > 0
              ? data?.teamMembers.map((member, index) => (
                  <TeamMemberCard
                    key={index}
                    name={member.username}
                    _id={member._id}
                    createdAt={member.createdAt}
                    email={member.email}
                  />
                ))
              : !loading && <Empty />}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMembersSection;
