import Hero from "../components/Hero";
import CollectionSection from "../components/Collections";
import Age from "../components/Age"
import FeaturesBar from "../components/FeaturesBar/FeaturesBar";
import BestSellers from "../components/BestSellers/BestSellers";

export default function Home() {
  return (
    <>
      <Hero />
      <CollectionSection />
      <Age />
      <FeaturesBar />
      <BestSellers />
    </>
  );
}