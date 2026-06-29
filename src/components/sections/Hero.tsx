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
          <h1 className="text-6xl font-bold leading-tight">
            Furniture inspired by the world.
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Discover pieces that celebrate culture, creativity and personal
            expression.
          </p>

          <div className="mt-10">
            <Button>Explore Collection →</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;