function FinanceSection() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold text-indigo-500 mb-3">
            Finance made simple
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            All your finance modules <br /> in one powerful app
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Monitor spending, manage cards, track transactions, and gain
            real-time insights with a smart dashboard designed for clarity
            and control.
          </p>

          <button className="flex items-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
            Learn More →
          </button>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="relative">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <p className="text-sm text-gray-500 mb-2">Account Balance</p>
            <h3 className="text-3xl font-bold text-gray-900">$88,220.00</h3>
            <p className="text-sm text-green-500 mt-1">Active</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-4">
              Latest Transactions
            </p>

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-900">Netflix Subscription</span>
            <span className="text-red-500">- $15</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-900">Amazon Purchase</span>
            <span className="text-red-500">- $120</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-900">Spotify</span>
            <span className="text-red-500">- $9</span>
          </div>
        </div>

          {/* Floating Gradient Card */}
          <div className="absolute -right-8 top-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl p-6 w-56 shadow-xl">
            <p className="text-sm opacity-80">Virtual Card</p>
            <h4 className="mt-4 tracking-widest text-lg">**** 5768</h4>
            <p className="text-sm mt-2 opacity-80">Valid Thru 12/26</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FinanceSection;
