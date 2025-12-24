function Testimonials() {
  return (
    <section className="w-full bg-slate-50 py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-500 mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What our users say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10 text-center">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            “OrbitPay makes online payments extremely easy and secure.
            I use it daily for my business, and it has significantly
            improved how I manage transactions and expenses.”
          </p>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold mb-3">
              AJ
            </div>

            <h4 className="font-semibold text-gray-900">
              Alex Johnson
            </h4>

            <span className="text-sm text-gray-500">
              Startup Founder
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
