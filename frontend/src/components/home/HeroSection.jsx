import PropTypes from "prop-types";

const HeroSection = ({ title1, title2, desc }) => {
  return (
    <section className="px-5 lg:px-20 sm:h-[500px] w-full relative flex-center">
      <div className=" max-w-[800px] py-10 flex-center flex-col">
        <h1 className="head_text text-center">
          {title1} <span className="orange_gradient">{title2}</span>
        </h1>
        <p className="desc text-center">{desc}</p>
        <div className="gap-x-2 mt-7">
          <button className="btn mx-1">
            <span className="orange_gradient">Explore...</span>
          </button>
          <button className="btn mx-1">
            <span className="orange_gradient">Read Doumentation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

HeroSection.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
