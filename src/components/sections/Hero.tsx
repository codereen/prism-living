import heroImage from "../../assets/images/hero.jpg";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <Container className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-6xl font-semibold leading-[1.05] lg:text-7xl">
  Inspired by
  <br />
  the world.
  <br />
  <br />
  Designed for
  <br />
  your home.
</h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-stone-200">
  Discover culturally inspired furniture collections and customise every piece
  to suit your space with AI-powered design.
</p>

          <div className="mt-10">
            <Button>Explore Collections →</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;