import { motion, Variants } from 'framer-motion';
import Button from './UI/Button';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/rob-tech hero.jpg')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag line */}
          <motion.p
            variants={itemVariants}
            className="text-accent-500 text-sm font-bold uppercase tracking-widest mb-4"
          >
            PRZYCZEPY - PLATFORMY - TRAPY - TRANSPORT CIĘŻAROWY
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Przyczepy niskopodłogowe i platformy najazdowe<br />
            <span className="text-accent-500">z grubych materiałów ~50% taniej</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
          >
            Od 16 lat budujemy rozwiązania transportowe, których sami byśmy chcieli używać.
          </motion.p>

          {/* Two CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => scrollToSection('#services')}
              size="lg"
              variant="primary"
            >
              Zobacz usługi
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              Skontaktuj się
            </Button>
          </motion.div>

          {/* Key facts */}
          <motion.div
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white border-opacity-20 pt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={statsVariants} className="text-center sm:text-left">
              <p className="text-4xl md:text-5xl font-bold text-accent-500">+140</p>
              <p className="text-gray-300 text-sm mt-2">wykonanych zleceń specjalistycznych</p>
            </motion.div>
            <motion.div variants={statsVariants} className="text-center sm:text-left">
              <p className="text-4xl md:text-5xl font-bold text-accent-500">~50%</p>
              <p className="text-gray-300 text-sm mt-2">ceny nowego sprzętu</p>
            </motion.div>
            <motion.div variants={statsVariants} className="text-center sm:text-left">
              <p className="text-4xl md:text-5xl font-bold text-accent-500">16 lat</p>
              <p className="text-gray-300 text-sm mt-2">doświadczenia w branży</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('#how-it-works')}
        >
          <svg className="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;