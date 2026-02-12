import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🚜',
      title: 'Produkcja Przyczep',
      description: 'Profesjonalna produkcja przyczep niskopodwoziowych na zamówienie z najwyższą precyzją',
    },
    {
      icon: '📦',
      title: 'Platformy Ciężarowe',
      description: 'Producent nowoczesnych platform ciężarowych dla transportu maszyn',
    },
    {
      icon: '💨',
      title: 'Piaskowanie',
      description: 'Usługa piaskowania i przygotowania powierzchni do spawania',
    },
    {
      icon: '🔥',
      title: 'Spawanie',
      description: 'Profesjonalne spawanie konstrukcji stalowych najwyższej jakości',
    },
    {
      icon: '🚚',
      title: 'Transport Maszyn Rolniczych',
      description: 'Transport ciągników, kombajnów i innego sprzętu rolniczego',
    },
    {
      icon: '🏗️',
      title: 'Transport Maszyn Budowlanych',
      description: 'Bezpieczny transport kopiarek, spycharek i maszyn budowlanych',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nasze Usługi"
          subtitle="Kompleksowa oferta dla profesjonalistów transportu ciężkiego"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:bg-primary-50 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
