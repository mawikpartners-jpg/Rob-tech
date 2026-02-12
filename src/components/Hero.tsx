import Button from './UI/Button';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Profesjonalne Przyczepy i Usługi Transportowe
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Rob-Tech to lider w produkcji przyczep niskopodwoziowych i platform ciężarowych. 
              Oferujemy kompleksowe usługi transportowe dla maszyn rolniczych, budowlanych i drogowych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#services')}
                size="lg"
              >
                Poznaj Nasze Usługi
              </Button>
              <Button
                onClick={() => scrollToSection('#gallery')}
                variant="outline"
                size="lg"
              >
                Zobacz Realizacje
              </Button>
            </div>
          </div>

          <div className="animate-fade-in hidden md:block">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl h-96 flex items-center justify-center text-white text-center p-8">
              <div>
                <p className="text-6xl mb-4">🚜</p>
                <p className="text-2xl font-bold">Specjalizacja w Transporcie Ciężkim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
