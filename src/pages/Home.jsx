import Hero from "../components/Hero";
import CollectionSection from "../components/Collections";
import Age from "../components/Age"
import FeaturesBar from "../components/FeaturesBar/FeaturesBar";
import BestSellers from "../components/BestSellers/BestSellers";
import BrandStory from "../components/BrandStory/BrandStory";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Testimonials from "../components/Testimonals/Testimonials";
import Instagram from "../components/Instagram/Instagram";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionSection />
      <Age />
      <FeaturesBar />
      <BestSellers />
      <BrandStory />
      <NewArrivals />
      <Testimonials />
      <Instagram />
      <Footer />
    </>
  );
}