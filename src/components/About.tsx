import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Card from './UI/Card';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  /* ARCHIVED - Timeline section (to be restored later with new photos)
  const timelineSteps = [
    { step: 1, title: 'Skupujemy', desc: 'Używane przyczepy / platformy' },
    { step: 2, title: 'Rozbieramy', desc: 'Do gołej bazy' },
    { step: 3, title: 'Piaskujemy', desc: 'Usuwamy korozję' },
    { step: 4, title: 'Spawamy', desc: 'Naprawiamy i wzmacniamy' },
    { step: 5, title: 'Przerabiamy', desc: 'Dostosowujemy do potrzeb' },
    { step: 6, title: 'Instalacje', desc: 'Pneumatyka i elektryka' },
  ];
  */

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Pełna renowacja',
      description: 'Kupujemy używane, gruntowo przerabiamy i sprzedajemy "jak nowe" ~50% taniej.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: 'Tworzymy na zamówienie',
      description: 'Słuchamy Twoich potrzeb i tworzymy coś specjalnie dla Ciebie.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Grube materiały i wzmocnienie',
      description: 'U nas dostajesz pełny produkt - bez półśrodków i oszczędzaniu na materiale.',
    },
    {
      icon: (
        <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Praktyczne i autorskie rozwiązania',
      description: 'Dążymy do perfekcji, dlatego wprowadzamy ułatwienia, które wiemy, że są potrzebne na rynku.',
    },
  ];

  const checkmarks = [
    'Wyselekcjonowane bazy',
    'Sprawdzona praktyka',
    '100% solidne wykonanie',
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* ARCHIVED - Main text
        <motion.div
          className="mt-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl text-gray-600 leading-relaxed">
            Wiemy jak to wygląda w praktyce, dlatego tworzymy rozwiązania, których sami chcielibyśmy używać.
          </p>
        </motion.div>
        */}

        {/* ARCHIVED - Timeline
        <motion.div
          className="mt-16 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-500 to-accent-500 transform -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-2">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {step.step}
                </div>
                <h4 className="mt-4 font-bold text-gray-900 text-sm">{step.title}</h4>
                <p className="text-gray-500 text-xs mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        */}

        {/* ARCHIVED - Before/After images
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="2024-12-22.webp"
              alt="Przed renowacją"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="text-white font-bold text-lg">Proces renowacji</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="2025-04-06.webp"
              alt="Po renowacji"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="text-white font-bold text-lg">Gotowy produkt</span>
            </div>
          </div>
        </motion.div>
        */}

        {/* ARCHIVED - Result text
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Tworzymy trwałe i solidne rozwiązanie na zamówienie - gotowe do intensywnej eksploatacji 
            <span className="text-accent-600 font-bold"> (za połowę ceny)</span>.
          </p>
        </motion.div>
        */}

        {/* New product showcase images */}
        <motion.div
          className="mt-12 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="przyczepy i platformy/przyczepa1 - use it for sure.jpg"
              alt="Przyczepa niskopodwoziowa"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="text-white font-bold text-xl">Przyczepy niskopodwoziowe</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="przyczepy i platformy/platforma1.jpg"
              alt="Platforma najazdowa"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <span className="text-white font-bold text-xl">Platformy najazdowe</span>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 p-3 bg-accent-50 rounded-xl inline-block">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Checkmarks */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {checkmarks.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;