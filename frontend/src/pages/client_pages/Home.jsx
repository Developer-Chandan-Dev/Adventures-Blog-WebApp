import { useEffect, useState } from "react";
import {
  PopularCategories,
  FeaturedBlogs,
  HeroSection,
  HomePageBlogs,
} from "../../components/index";
import useFetchData from "../../hooks/useFetchData";

const Home = () => {
  const [categories, setCategories] = useState(null);
  const [featuredPosts, setFeaturedPosts] = useState(null);
  const [latestPosts, setLatestPosts] = useState(null);

  const { data, error, loading } = useFetchData("/api/v1/home-data");
  console.log(data, error);
  useEffect(() => {
    if (data && data.categories !== null) {
      setCategories(data.categories);
    }
    if (data && data.featuredPosts !== null) {
      setFeaturedPosts(data.featuredPosts);
    }
    if (data && data.latestPosts !== null) {
      setLatestPosts(data.latestPosts);
    }
  }, [data]);
  console.log(categories, featuredPosts, latestPosts);

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

      <FeaturedBlogs featuredPosts={featuredPosts} />
      <HomePageBlogs latestPosts={latestPosts} />
      <PopularCategories categories={categories} />
    </section>
  );
};

export default Home;
