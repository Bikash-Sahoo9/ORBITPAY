import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import HowItWorks from "./components/HowItWorks";
import FinanceSection from "./components/FinanceSection";
import Transactions from "./components/Transactions";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partners />
      <HowItWorks />
      <FinanceSection />
      <Transactions />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
