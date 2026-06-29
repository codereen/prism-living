import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import FeaturedCollections from "../components/sections/FeaturedCollections";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
    </>
  );
}

export default Home;