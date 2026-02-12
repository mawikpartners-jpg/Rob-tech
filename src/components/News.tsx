import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

const News: React.FC = () => {
  const news = [
    {
      title: 'Nowa kolekcja przyczep 2025',
      date: '15 stycznia 2025',
      content: 'Introducing our latest trailer designs with improved aerodynamics and fuel efficiency.',
      image: '/2025-06-04.webp',
    },
    {
      title: 'Rozszerzenie usług transportowych',
      date: '10 stycznia 2025',
      content: 'Rob-Tech rozszerza swoją ofertę o transport specjalistyczny wózków widłowych.',
      image: '/2025-06-06.webp',
    },
    {
      title: 'Certyfikacja ISO 9001',
      date: '5 stycznia 2025',
      content: 'Z dumą ogłaszamy uzyskanie międzynarodowego certyfikatu ISO 9001 dla systemów zarządzania jakością.',
      image: '/2025-06-13.webp',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Aktualności"
          subtitle="Najnowsze wiadomości z Rob-Tech"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-accent-600 text-sm font-semibold mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
