import Container from "../ui/Container";

function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <Container className="flex items-center justify-between py-8">
        <h2 className="text-2xl font-semibold">
          Prism Living
        </h2>

        <nav className="flex gap-10 text-sm">
          <a href="#">Collections</a>
          <a href="#">Customise</a>
          <a href="#">About</a>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;