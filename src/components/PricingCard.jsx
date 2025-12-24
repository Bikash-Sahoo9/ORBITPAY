function PricingCard({ title, price, features = [], highlighted }) {
  return (
    <div
      className={`relative rounded-2xl p-8 border transition ${
        highlighted
          ? "bg-gray-900 text-white shadow-xl scale-105"
          : "bg-white text-gray-900 shadow-md hover:shadow-xl"
      }`}
    >
      {/* Badge */}
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-center">
        {title}
      </h3>

      {/* Price */}
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className={`text-sm ${highlighted ? "text-gray-300" : "text-gray-500"}`}>
          {" "} / month
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-indigo-500">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`w-full py-3 rounded-lg font-medium transition ${
          highlighted
            ? "bg-white text-gray-900 hover:bg-gray-100"
            : "bg-gray-900 text-white hover:bg-black"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
}

export default PricingCard;
