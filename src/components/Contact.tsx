import { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from './UI/SectionTitle';
import Button from './UI/Button';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Skontaktuj się z nami"
            subtitle="Masz pytania? Chętnie odpowiemy!"
            centered
          />
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Imię i Nazwisko</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all"
                  placeholder="+48 123 456 789"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Wiadomość</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none transition-all"
                  placeholder="Twoja wiadomość..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Wyślij Wiadomość
              </Button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Informacje Kontaktowe</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adres</h4>
                  <p className="text-gray-600">
                    Rob-Tech<br />
                    ul. Przemysłowa 15<br />
                    80-001 Gdańsk<br />
                    Polska
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Telefon</h4>
                  <p className="text-gray-600">+48 58 123 45 67</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">kontakt@rob-tech.pl</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Godziny Pracy</h4>
                  <p className="text-gray-600">
                    Poniedziałek - Piątek: 08:00 - 17:00<br />
                    Sobota: 09:00 - 13:00<br />
                    Niedziela: Zamknięte
                  </p>
                </div>
              </div>
            </div>

            {/* Updated CTA */}
            <motion.div 
              className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-3">Szukasz solidnego rozwiązania transportowego?</h4>
              <p className="mb-6 text-primary-100">Skontaktuj się już teraz!</p>
              <a
                href="tel:+48581234567"
                className="inline-flex items-center gap-3 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zadzwoń Teraz
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;