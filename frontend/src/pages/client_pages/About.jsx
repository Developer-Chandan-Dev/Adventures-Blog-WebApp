import { HeroSection, AboutUs, AboutDev } from "../../components/index";

const About = () => {
  return (
    <section className="w-full">
      <HeroSection
        title1="Know"
        title2="Who we are?"
        desc="It is a Blog platform where you can read blogs with different
          categories, I know you say that there are number of blog website are
          present in the market when why we come in your platform, then my
          answer is that there you can add your own blog."
      />
    <AboutUs/>
    <AboutDev/>
    </section>
  );
};

export default About;
