function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="container py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold">ORBITPAY</h1>

        <ul className="hidden md:flex gap-6 text-sm">
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Apply for Card</li>
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden md:block">ENG</span>
          <span className="hidden md:block">Login</span>
          <button className="bg-white text-black px-4 py-2 rounded-md text-sm">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
