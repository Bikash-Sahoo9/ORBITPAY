function HowItWorksCard({ step, icon, title, description }) {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition border">

      {/* Step Number */}
      <span className="absolute -top-4 left-6 bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
        {step}
      </span>

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-50 text-2xl mb-6">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}

export default HowItWorksCard;
