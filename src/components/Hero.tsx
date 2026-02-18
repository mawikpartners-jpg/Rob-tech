import Button from './UI/Button';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/rob-tech hero.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-65" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Tag line */}
          <p className="text-accent-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Renowacja · Transport · Produkcja
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Renowowane przyczepy<br />
            <span className="text-accent-500">i platformy najazdowe</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed max-w-2xl">
            Solidniejsze i bardziej dopracowane niż nowe budżetowe przyczepy.
            W cenie około połowy nowego sprzętu.
          </p>

          <p className="text-base text-gray-300 mb-10 max-w-2xl">
            Każda przyczepa przechodzi pełny proces renowacji: piaskowanie, spawanie,
            wymiana elementów eksploatacyjnych. Wybieramy tylko sprawdzone bazy.
          </p>

          {/* Two CTAs – Przyczepy / Platformy */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('#services')}
              size="lg"
              variant="primary"
            >
              Przyczepy niskopodwoziowe
            </Button>
            <Button
              onClick={() => scrollToSection('#services')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              Platformy najazdowe
            </Button>
          </div>

          {/* Key facts */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white border-opacity-20 pt-10">
            <div>
              <p className="text-3xl font-bold text-white">~50%</p>
              <p className="text-gray-300 text-sm mt-1">ceny nowego sprzętu</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-gray-300 text-sm mt-1">przegląd i renowacja</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">PL</p>
              <p className="text-gray-300 text-sm mt-1">produkcja i serwis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
