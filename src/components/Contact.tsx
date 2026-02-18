import { useState } from 'react';
import SectionTitle from './UI/SectionTitle';
import Button from './UI/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skontaktuj się z nami"
          subtitle="Mamy pytania? Chętnie odpowiemy!"
          centered
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Imię i Nazwisko</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
                  placeholder="Twoja wiadomość..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Wyślij Wiadomość
              </Button>
            </form>
          </div>

          <div className="animate-fade-in space-y-8">
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

            <div className="bg-primary-600 rounded-lg p-8 text-white">
              <h4 className="text-xl font-bold mb-2">Potrzebujesz renowacji przyczepy?</h4>
              <p className="mb-4">Skontaktuj się z nami natychmiast!</p>
              <a
                href="tel:+48581234567"
                className="inline-block bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Zadzwoń Teraz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
