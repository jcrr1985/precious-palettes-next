import Banner2 from "@/components/Banner2";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";

const Home = () => {
  return (
    <>
      <section className="god">
        <Banner />
        <Banner2 />
      </section>
      <section className="carousel-section">
        <Carousel />
      </section>
    </>
  );
};

export default Home;
