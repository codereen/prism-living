import Container from "../ui/Container";

function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <Container className="flex items-center justify-between py-8">
        <h1 className="text-xl font-semibold tracking-[0.35em] text-white">
  PRISM
</h1>

        <nav className="flex gap-10 text-sm">
          <a href="#">Collections</a>
          <a href="#">Design Studio</a>
          <a href="#">About</a>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;