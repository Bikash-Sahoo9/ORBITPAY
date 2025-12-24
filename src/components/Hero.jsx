function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-amber-400 via-pink-500 to-indigo-600">
      <div className="container min-h-[90vh] flex flex-col md:flex-row items-center justify-between py-28">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Get your <span className="text-black">virtual</span> payment card
            <br />
            with ease.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            One card for all your online payments. Safe, fast, and easy to use.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="px-8 py-4 rounded-full bg-black text-white font-medium shadow-lg hover:scale-105 transition">
              Try Now Free
            </button>

            <span className="text-sm text-white/80">
              ⭐ Trusted by 1,000+ users
            </span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="mt-16 md:mt-0">
          <div className="w-96 h-56 rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl flex items-center justify-center text-white font-semibold text-lg">
            Virtual Card
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
