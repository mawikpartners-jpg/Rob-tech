const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo + description */}
          <div className="md:col-span-1">
            <img
              src="ROB-TECH LOGO (POZIOM).png"
              alt="Rob-Tech"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Renowacja i sprzedaż przyczep niskopodwoziowych oraz platform najazdowych.
              Transport maszyn rolniczych i budowlanych.
            </p>
          </div>

          {/* Usługi */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Usługi</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Przyczepy niskopodwoziowe</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Platformy najazdowe</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Spawanie konstrukcji</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Piaskowanie</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Transport maszyn</a></li>
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Firma</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Dlaczego my</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galeria realizacji</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Opinie klientów</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="tel:601057182" className="hover:text-white transition-colors">
                  601 057 182
                </a>
              </li>
              <li>
                <a href="mailto:robert.teresin@gmail.com" className="hover:text-white transition-colors">
                  robert.teresin@gmail.com
                </a>
              </li>
              <li className="text-gray-500">
                Pon – Pt: 07:00 – 19:00<br />
                Sob: 08:00 – 17:00<br />
                Niedz: 12:00 – 17:00
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/p/Rob-Tech-100088599331227/"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} Rob-Tech. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Stworzone z 💙 przez <a href="https://procesflow.pl/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">Procesflow</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
