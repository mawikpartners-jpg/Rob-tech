import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      author: 'Jan Kowalski',
      content: 'Najlepszy przewoźnik maszyn rolniczych. Bezpieczny transport i profesjonalny zespół!',
      rating: 5,
    },
    {
      author: 'Maria Nowak',
      content: 'Perfekcyjnie wykonane przyczepy. Najwyższa jakość i niezawodność przez wiele lat.',
      rating: 5,
    },
    {
      author: 'Piotr Lewandowski',
      content: 'Transport budowlanki bez problemów. Polecam wszystkim! Świetny serwis.',
      rating: 5,
    },
    {
      author: 'Katarzyna Zielińska',
      content: 'Kompleksowe usługi spawania i produkcji. Zawsze mogę na nich liczyć.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Opinie Klientów"
          subtitle="Co mówią nasi zadowoleni klienci"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">Zadowolony Klient</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
