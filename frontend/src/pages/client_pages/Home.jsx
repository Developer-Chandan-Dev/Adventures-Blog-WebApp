import HeroSection from '../../components/home/HeroSection';
import FeaturedBlogs from '../../components/home/FeaturedBlogs';
import HomePageBlogs from '../../components/home/HomePageBlogs';
import PopularCategories from '../../components/home/PopularCategories';
import useFetchData from '../../hooks/useFetchData';
import { useEffect, useState } from 'react';

const Home = () => {
  // State variables for categories, featured posts, and latest posts
  const [categories, setCategories] = useState(null);
  const [featuredPosts, setFeaturedPosts] = useState(null);
  const [latestPosts, setLatestPosts] = useState(null);

  // Fetch data from the API
  const { data = [], error, loading } = useFetchData("/api/v1/home-data");
  console.log(data, error, loading);

  // Update state based on fetched data
  useEffect(() => {
    if (
      data &&
      Array.isArray(data.categories) &&
      data.categories.length > 0 &&
      data.categories !== null
    ) {
      setCategories(data.categories);
    }
    if (
      data &&
      Array.isArray(data.featuredPosts) &&
      data.featuredPosts.length > 0 &&
      data.featuredPosts !== null
    ) {
      setFeaturedPosts(data.featuredPosts);
    }
    if (
      data &&
      Array.isArray(data.latestPosts) &&
      data.latestPosts.length > 0 &&
      data.latestPosts !== null
    ) {
      setLatestPosts(data.latestPosts);
    }
  }, [data]);

  // Log state variables
  console.log(categories, featuredPosts, latestPosts);

  return (
    <section className='w-full'>
      {/* Hero section component */}
      <HeroSection
        title1="Adventures"
        title2="Blogs Platform"
        searchBox={false}
        desc="It is a Blog platform where you can read blogs with different
          categories, I know you say that there are number of blog website are
          present in the market when why we come in your platform, then my
          answer is that there you can add your own blog."
      />
      {/* Featured Blogs component */}
      <FeaturedBlogs featuredPosts={featuredPosts} />
      {/* Home Page Blogs component */}
      <HomePageBlogs latestPosts={latestPosts} />
      {/* Popular Categories component */}
      <PopularCategories categories={categories} />
    </section>
  );
}

export default Home
