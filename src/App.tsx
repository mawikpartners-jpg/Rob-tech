import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
