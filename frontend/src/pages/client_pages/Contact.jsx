import ContactUsForm from "../../components/contact/ContactUsForm";
import MapBox from "../../components/contact/MapBox";
import HeroSection from "../../components/home/HeroSection";

const Contact = () => {
  return (
    <>
      <section className="w-full">
        <HeroSection
          title1="Feel Free To"
          title2="Contact Us"
          desc="It is a Blog platform where you can read blogs with different
          categories, I know you say that there are number of blog website are
          present in the market when why we come in your platform, then my
          answer is that there you can add your own blog."
        />
        <MapBox/>
        <ContactUsForm/>
      </section>
    </>
  );
};

export default Contact;
