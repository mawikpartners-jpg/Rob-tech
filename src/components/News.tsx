import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

const News: React.FC = () => {
  const news = [
    {
      title: 'Nowa partia przyczep niskopodwoziowych – dostępne od ręki',
      date: '10 lutego 2026',
      content: 'Do sprzedaży trafiły przyczepy niskopodwoziowe po pełnej renowacji. Udźwig 24 t i 30 t. Stan: po piaskowaniu, spawaniu i malowaniu epoksydowym. Możliwość odbioru osobistego lub dostawy.',
      image: '2025-06-04.webp',
      tag: 'Oferta',
    },
    {
      title: 'Realizacja: transport kombajnu John Deere – 620 km',
      date: '28 stycznia 2026',
      content: 'Zrealizowaliśmy transport kombajnu zbożowego na trasie Podkarpacie – Kujawy. Ładunek ponadgabarytowy, przejazd nocny. Własna przyczepa niskopodwoziowa 30 t, pilot.',
      image: '2025-06-06.webp',
      tag: 'Realizacja',
    },
    {
      title: 'Spawanie i renowacja platform dla klienta z branży budowlanej',
      date: '15 stycznia 2026',
      content: 'Zakończyliśmy renowację trzech platform najazdowych dla firmy budowlanej z Wielkopolski. Zakres: piaskowanie, wymiana desek, naprawa układu hamulcowego, malowanie.',
      image: '2025-06-13.webp',
      tag: 'Realizacja',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Aktualności"
          subtitle="Realizacje, dostępny sprzęt i bieżące informacje"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">{item.date}</p>
                <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
