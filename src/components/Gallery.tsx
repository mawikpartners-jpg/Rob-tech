import { useState } from 'react';
import SectionTitle from './UI/SectionTitle';
import LazyImage from './UI/LazyImage';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { id: '1', image: '/2024-12-22.webp', alt: 'Przyczpa niskopodwoziowa' },
    { id: '2', image: '/2024-12-25.webp', alt: 'Transport maszyn rolniczych' },
    { id: '3', image: '/2024-12-28.webp', alt: 'Platforma ciężarowa' },
    { id: '4', image: '/2024-12-223.webp', alt: 'Realizacja transport' },
    { id: '5', image: '/2025-02-02.webp', alt: 'Maszyna budowlana' },
    { id: '6', image: '/2025-03-01.webp', alt: 'Transport kopiarki' },
    { id: '7', image: '/2025-03-071.webp', alt: 'Realizacja spawania' },
    { id: '8', image: '/2025-04-06.webp', alt: 'Przyczpa gotowa' },
    { id: '9', image: '/2025-04-07.webp', alt: 'Transport profesjonalny' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Galeria Realizacji"
          subtitle="Najlepsze projekty naszych klientów"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group h-64"
              onClick={() => setSelectedImage(image.image)}
            >
              <LazyImage
                src={image.image}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🔍
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Powiększony obraz"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
