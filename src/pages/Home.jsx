import Hero from "../components/Hero";
import CollectionSection from "../components/Collections";
import Age from "../components/Age"
import FeaturesBar from "../components/FeaturesBar/FeaturesBar";
import BestSellers from "../components/BestSellers/BestSellers";
import BrandStory from "../components/BrandStory/BrandStory";
import NewArrivals from "../components/NewArrivals/NewArrivals";

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
    </>
  );
}