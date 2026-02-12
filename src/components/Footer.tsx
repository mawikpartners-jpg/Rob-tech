const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Rob-Tech</h3>
            <p className="text-gray-400">
              Profesjonalny transport ciężki i produkcja przyczep od {currentYear - 10} roku.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Produkcja Przyczep</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Transport Maszyn</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Spawanie</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Piaskowanie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Odnośniki</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">O nas</a></li>
              <li><a href="#gallery" className="hover:text-primary-400 transition-colors">Galeria</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">Opinie</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-2xl">
                f
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-2xl">
                𝕏
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-2xl">
                in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Rob-Tech. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
