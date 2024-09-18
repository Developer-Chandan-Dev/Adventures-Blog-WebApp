import a from "../../assets/images/consultant.png";
import join from "../../assets/images/join_us.jpg";

const CommunityHeroSection = () => {
  return (
    <>
      <section className="w-full px-5 sm:px-14 py-16 lg:py-12 text-center lg:text-left bg-white flex items-center justify-around lg:px-5 gap-x-5">
        <div>
          <h1 className="head_text">
            Our <span className="orange_gradient">Community</span>
          </h1>
          <p className="desc">
            This is our community page, you can explore about our community and
            community members and you also can join our community. Our community
            members can add new blogs or post for this website and edit or
            delete.
          </p>
          <p className="desc">
            If you are a student then this website is for you can tell others
            what you learn today by a post. You will learn how to express your
            learning. How easy you can make this topic by a blog.
          </p>

          <div className="gap-x-2 mt-7">
            <button className="btn mx-1">
              <span className="orange_gradient">Join Our Community</span>
            </button>
            <button className="btn mx-1">
              <span className="orange_gradient">Contact Us</span>
            </button>
          </div>
        </div>
        <div className="hidden rounded-md overflow-hidden lg:block">
          <img src={join} alt="community-picture" width={450} />
        </div>
      </section>
    </>
  );
};

export default CommunityHeroSection;
