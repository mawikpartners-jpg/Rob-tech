import { useEffect, useRef, useState } from 'react';
import { LazyImageProps } from '../../types';

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            image.src = image.dataset.src || '';
            observer.unobserve(image);
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      imgRef.current.dataset.src = src;
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={`${className} ${isLoading ? 'bg-gray-200 animate-pulse' : ''}`}
      onLoad={() => setIsLoading(false)}
      onError={() => setIsLoading(false)}
    />
  );
};

export default LazyImage;
