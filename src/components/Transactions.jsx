function Transactions() {
  return (
    <section className="w-full bg-slate-50 py-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT – TRANSACTIONS CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Latest Transactions
          </h3>

          <div className="space-y-4">
            {/* Item */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-sm">
                  🎬
                </div>
                <span className="text-gray-900 text-sm font-medium">
                  Netflix Subscription
                </span>
              </div>
              <span className="text-red-500 text-sm font-medium">
                - $15
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-sm">
                  🛒
                </div>
                <span className="text-gray-900 text-sm font-medium">
                  Amazon Purchase
                </span>
              </div>
              <span className="text-red-500 text-sm font-medium">
                - $120
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-sm">
                  🎵
                </div>
                <span className="text-gray-900 text-sm font-medium">
                  Spotify
                </span>
              </div>
              <span className="text-red-500 text-sm font-medium">
                - $9
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT – TEXT CONTENT */}
        <div>
          <p className="text-sm font-semibold text-indigo-500 mb-3">
            Fast & Secure
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transactions completed <br /> within seconds
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Send and receive payments instantly using our secure transaction
            engine built for speed, reliability, and real-time tracking.
          </p>

          <button className="px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-black transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}

export default Transactions;
