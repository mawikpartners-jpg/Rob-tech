import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      author: 'Marek Wiśniewski',
      role: 'Rolnik, woj. mazowieckie',
      content: 'Kupiłem przyczepę niskopodwoziową 24 t po renowacji. Jakość wykonania na poziomie – piaskowanie, spawy bez zarzutu, nowe oświetlenie. Za nową zapłaciłbym dwa razy tyle. Pracuje od pół roku bez żadnych problemów.',
      rating: 5,
    },
    {
      author: 'Tomasz Grabowski',
      role: 'Firma transportowa, Wielkopolska',
      content: 'Zależy mi na sprawdzonym sprzęcie, nie na papierach. Przyczepa z Rob-Tech ma solidną ramę i nową powłokę. Widać, że wiedzą, co kupują do renowacji – żadnych ukrytych wad. Polecam bez zastrzeżeń.',
      rating: 5,
    },
    {
      author: 'Krzysztof Dąbrowski',
      role: 'Przedsiębiorca budowlany',
      content: 'Platforma najazdowa po renowacji – cena o połowę niższa niż nowa, a jakość porównywalna. Widać staranne spawanie i nowe deski. Używam do transportu koparki, sprzęt radzi sobie bez problemu.',
      rating: 5,
    },
    {
      author: 'Andrzej Szymański',
      role: 'Gospodarstwo rolne, woj. lubelskie',
      content: 'Potrzebowałem przyczepy na kombajn – nowe były poza budżetem. Rob-Tech zaproponował przyczepę po pełnej renowacji. Obawiałem się zakupu używanego sprzętu, ale stan jest bardzo dobry. Kolejna pewnie też od nich.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Opinie klientów"
          subtitle="Co mówią kupujący nasze przyczepy i platformy"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-7">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-5 text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                <p className="text-gray-400 text-xs mt-0.5">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
