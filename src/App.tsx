import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="industries">
        <Industries />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <ContactForm />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}