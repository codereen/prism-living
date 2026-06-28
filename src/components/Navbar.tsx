function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <h2 className="text-xl font-semibold">
        Prism Living
      </h2>

      <div className="flex gap-6 text-sm">
        <a href="#">Collections</a>
        <a href="#">Customise</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}

export default Navbar;