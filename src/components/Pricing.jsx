import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-500 mb-2">
            Pricing Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple pricing for everyone
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PricingCard
            title="Personal"
            price="9"
            features={[
              "Virtual Card Access",
              "Basic Analytics",
              "Email Support",
            ]}
          />

          <PricingCard
            title="Business"
            price="29"
            highlighted
            features={[
              "Unlimited Virtual Cards",
              "Advanced Analytics",
              "Priority Support",
            ]}
          />

          <PricingCard
            title="Enterprise"
            price="99"
            features={[
              "Custom Solutions",
              "Dedicated Manager",
              "24/7 Support",
            ]}
          />
        </div>

      </div>
    </section>
  );
}

export default Pricing;
