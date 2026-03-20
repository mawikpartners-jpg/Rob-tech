import { useState, useRef } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from './UI/SectionTitle';
import Card from './UI/Card';

interface ServiceImages {
  [key: string]: string[];
}

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const serviceImages: ServiceImages = {
    'Przyczepy niskopodwoziowe': [
      'przyczepy i platformy/przyczepa1 - use it for sure.jpg',
      'przyczepy i platformy/przczepa1a-tez use it.jpg',
      'przyczepy i platformy/przyczepa 3tez dobre.jpg',
      'przyczepy i platformy/przyczepa 4.jpg',
      'przyczepy i platformy/przyczepa5.jpg',
      'przyczepy i platformy/przyczepa7 kolejne dobre.jpg',
      'przyczepy i platformy/przyczepa8.jpg'
    ],
    'Platformy najazdowe': [
      'przyczepy i platformy/platforma1.jpg',
      'przyczepy i platformy/platforma2.jpg',
      'przyczepy i platformy/platforma3.jpg',
      'przyczepy i platformy/platforma4.jpg',
      'przyczepy i platformy/najazd.jpg',
      'przyczepy i platformy/najazd2.jpg',
      'przyczepy i platformy/najazd3.jpg'
    ],
    'Piaskowanie': [
      'przyczepy i platformy/przyczepa6-vertical super na proces.jpg',
      '2025-03-071.webp',
      '2024-12-232.webp'
    ],
    'Spawanie konstrukcji': [
      '2025-03-01.webp',
      '2024-12-278.webp',
      '2025-05-11.webp'
    ],
    'Transport maszyn rolniczych': [
      'transport laweta/PHOTO-2026-02-26-22-27-00.jpg',
      'transport laweta/PHOTO-2026-02-26-22-27-19.jpg',
      'transport laweta/PHOTO-2026-02-26-22-27-31.jpg',
      'transport laweta/PHOTO-2026-02-26-22-27-44.jpg',
      'transport laweta/PHOTO-2026-02-26-22-27-55.jpg',
      'transport laweta/PHOTO-2026-02-26-22-28-14.jpg'
    ],
    'Transport maszyn budowlanych': [
      'transport laweta/PHOTO-2026-02-26-22-27-34.jpg',
      'transport laweta/PHOTO-2026-02-26-22-27-48.jpg',
      'transport laweta/PHOTO-2026-02-26-22-27-56.jpg',
      'transport laweta/PHOTO-2026-02-26-22-27-58.jpg',
      'transport laweta/PHOTO-2026-02-26-22-28-01.jpg',
      'transport laweta/PHOTO-2026-02-26-22-28-15.jpg'
    ],
  };

  const services = [
    {
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Przyczepy niskopodwoziowe',
      description: 'Sprzedaż i renowacja przyczep niskopodwoziowych do transportu maszyn rolniczych, budowlanych i drogowych. Udźwig od 7,5t - 18t DMC.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Platformy najazdowe',
      description: 'Platformy ciężarowe i najazdowe do załadunku maszyn własnym napędem. Stalowa konstrukcja, różne konfiguracje długości i nośności.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      title: 'Piaskowanie',
      description: 'Przygotowanie powierzchni stalowych pod powłoki antykorozyjne i malarskie.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      title: 'Spawanie konstrukcji',
      description: 'Naprawa ram, wzmocnienia, produkcja elementów stalowych na zlecenie. Spawacze z uprawnieniami.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      title: 'Transport maszyn rolniczych',
      description: 'Przewóz ciągników, kombajnów, przyczep i innego sprzętu rolniczego. Własny sprzęt transportowy. Obsługa na terenie całej Polski.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Transport maszyn budowlanych',
      description: 'Transport koparek, spycharek, wózków widłowych i nożycowych, walców drogowych. Ładunek ponadgabarytowy – indywidualna wycena.',
    },
  ];

  const openGallery = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedService && serviceImages[selectedService]) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % serviceImages[selectedService].length
      );
    }
  };

  const prevImage = () => {
    if (selectedService && serviceImages[selectedService]) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? serviceImages[selectedService].length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Usługi"
            subtitle="Produkcja, renowacja i transport ciężki – kompleksowa obsługa w jednym miejscu"
            centered
          />
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="p-7 h-full cursor-pointer group hover:shadow-xl hover:border-l-4 hover:border-primary-600 transition-all duration-300"
                onClick={() => openGallery(service.title)}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Zobacz zdjęcia</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Facebook link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a 
            href="https://www.facebook.com/p/Rob-Tech-100088599331227/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="font-medium">Więcej realizacji na naszym Facebooku</span>
          </a>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedService && serviceImages[selectedService] && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeGallery}
                className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300 transition-colors z-10"
              >
                ✕ Zamknij
              </button>

              {/* Image */}
              <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={serviceImages[selectedService][currentImageIndex]}
                    alt=""
                    title=""
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Image indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {serviceImages[selectedService].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentImageIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;