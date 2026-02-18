import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

const About: React.FC = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Selekcja baz',
      description: 'Dobieramy wyłącznie przyczepy z solidną ramą i sprawdzoną konstrukcją. Wykluczone są egzemplarze z korozją strukturalną.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Pełna renowacja',
      description: 'Piaskowanie do czystego metalu, spawanie, wymiana elementów eksploatacyjnych, malowanie proszkowe lub farbą epoksydową.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Cena ~50% nowego',
      description: 'Unikasz kosztów pierwszej amortyzacji. Sprzęt po renowacji jest trwalszy niż nowe budżetowe odpowiedniki z importu.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Doświadczenie',
      description: 'Wieloletnia praktyka w renowacji i produkcji przyczep. Każde zlecenie realizujemy z pełną odpowiedzialnością za efekt końcowy.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Dlaczego Rob-Tech"
          subtitle="Renowowane przyczepy klasy premium w rozsądnej cenie"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-5">
              Solidniejsze niż nowe budżetowe. Tańsze niż nowe premium.
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nowe tanie przyczepy z importu często mają cienkie blachy, słabe spawy i elementy,
              które nie wytrzymują intensywnej eksploatacji. Nowe przyczepy klasy premium kosztują
              dużo – i większość tej ceny tracisz przy pierwszej odsprzedaży.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Rob-Tech oferuje trzecią drogę: przyczepy po profesjonalnej renowacji. Solidna baza,
              nowa powłoka antykorozyjna, wymienione elementy eksploatacyjne. Sprzęt gotowy do pracy
              – za około połowę ceny nowego.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Piaskowanie do czystego metalu',
                  desc: 'Usuwamy starą powłokę i korozję powierzchniową. Blacha jest oceniana przed dalszym procesem.',
                },
                {
                  title: 'Spawanie i wzmocnienia',
                  desc: 'Naprawiamy pęknięcia, wzmacniamy newralgiczne punkty ramy. Spawy wykonywane metodą MIG/MAG.',
                },
                {
                  title: 'Wymiana elementów eksploatacyjnych',
                  desc: 'Łożyska, hamulce, oświetlenie, elementy hydrauliki – wymieniamy to, co ma wpływ na bezpieczeństwo.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <div className="mb-3">{value.icon}</div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
