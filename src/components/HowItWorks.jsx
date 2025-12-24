import HowItWorksCard from "./HowItWorksCard";

function HowItWorks() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-500 font-semibold mb-2">
            How does it work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple. Secure. Powerful.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <HowItWorksCard
            step="01"
            icon="💳"
            title="Checking Accounts"
            description="Create and manage your virtual checking accounts with full control and real-time monitoring."
          />

          <HowItWorksCard
            step="02"
            icon="💰"
            title="Credit & Debit Cards"
            description="Generate secure virtual cards instantly and use them safely for any online transaction."
          />

          <HowItWorksCard
            step="03"
            icon="📊"
            title="Manage Transactions"
            description="Track spending, manage expenses, and analyze transactions in one unified dashboard."
          />
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
