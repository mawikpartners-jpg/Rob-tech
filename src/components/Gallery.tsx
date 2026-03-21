import { useState, useRef } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from './UI/SectionTitle';
import LazyImage from './UI/LazyImage';

const Gallery: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const galleryImages = [
    { id: '1', image: '2024-12-22.webp', alt: '' },
    { id: '2', image: '2024-12-25.webp', alt: '' },
    { id: '3', image: '2024-12-28.webp', alt: '' },
    { id: '4', image: '2024-12-223.webp', alt: '' },
    { id: '5', image: '2025-02-02.webp', alt: '' },
    { id: '6', image: '2025-03-01.webp', alt: '' },
    { id: '7', image: '2025-03-071.webp', alt: '' },
    { id: '8', image: '2025-04-06.webp', alt: '' },
    { id: '9', image: '2025-04-07.webp', alt: '' },
  ];

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Galeria Realizacji"
            subtitle="Przykładowe projekty naszych klientów"
            centered
          />
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer group h-64"
              onClick={() => setSelectedImage(image.image)}
              whileHover={{ y: -5 }}
            >
              <LazyImage
                src={image.image}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt=""
                title=""
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300 transition-colors flex items-center gap-2"
              >
                <span>✕</span>
                <span className="text-sm">Zamknij</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;