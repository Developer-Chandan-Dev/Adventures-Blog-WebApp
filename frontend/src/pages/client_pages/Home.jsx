import { PopularCategories, FeaturedBlogs, HeroSection, HomePageBlogs } from "../../components/index";

const Home = () => {

  return (
    <section className="w-full">
      <HeroSection
        title1="Adventures"
        title2="Blogs Platform"
        desc="It is a Blog platform where you can read blogs with different
          categories, I know you say that there are number of blog website are
          present in the market when why we come in your platform, then my
          answer is that there you can add your own blog."
      />

      <FeaturedBlogs />
      <HomePageBlogs/>
      <PopularCategories/>

    </section>
  );
};

export default Home;
