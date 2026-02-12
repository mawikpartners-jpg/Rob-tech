import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

const About: React.FC = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Jakość',
      description: 'Najwyższa jakość produktów i usług',
    },
    {
      icon: '⚡',
      title: 'Niezawodność',
      description: 'Sprawdzeni partnerzy przez wiele lat',
    },
    {
      icon: '🔧',
      title: 'Ekspertyza',
      description: 'Doświadczony zespół profesjonalistów',
    },
    {
      icon: '🚀',
      title: 'Innowacja',
      description: 'Nowoczesne technologie i rozwiązania',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="O Rob-Tech"
          subtitle="Poznaj naszą firmę - lidera w branży transportu ciężkiego"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Lider w Branży Transportu Ciężkiego
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Rob-Tech to firma z bogatą historią i doświadczeniem w produkcji przyczep niskopodwoziowych oraz platform ciężarowych. Od lat zaufaniem nas obdarzają klienci z całej Polski.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Specjalizujemy się w transporcie maszyn rolniczych, budowlanych, drogowych oraz wózków widłowych i nożycowych. Każdy projekt realizujemy z najwyższą precyzją i zaangażowaniem.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl text-accent-600 mr-3">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Kompleksowe Usługi</h4>
                  <p className="text-gray-600">Produkcja, piaskowanie, spawanie i transport</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl text-accent-600 mr-3">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Doświadczony Zespół</h4>
                  <p className="text-gray-600">Fachowcy z wieloletnim doświadczeniem</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
