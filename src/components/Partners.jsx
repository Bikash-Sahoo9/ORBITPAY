function Partners() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm text-gray-500 mb-8">
          Some of our Trusted Partners / Affiliates
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          
          {[
            "Stripe",
            "Mastercard",
            "PayPal",
            "Google Pay",
            "Skrill",
            "Payoneer",
          ].map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center h-14 rounded-xl border bg-white shadow-sm hover:shadow-md transition text-gray-600 font-medium"
            >
              {brand}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Partners;
