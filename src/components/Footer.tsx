const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">
              SleepWell
            </h3>
            <p className="text-gray-300 text-sm">
              Качественные матрасы для здорового сна. Доставка по всей России.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/catalog" className="hover:text-white">
                  Каталог
                </a>
              </li>
              <li>
                <a href="/delivery" className="hover:text-white">
                  Доставка
                </a>
              </li>
              <li>
                <a href="/promotions" className="hover:text-white">
                  Акции
                </a>
              </li>
              <li>
                <a href="/reviews" className="hover:text-white">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/about" className="hover:text-white">
                  О нас
                </a>
              </li>
              <li>
                <a href="/contacts" className="hover:text-white">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Возврат
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>8 (800) 123-45-67</p>
              <p>info@sleepwell.ru</p>
              <p>Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 SleepWell. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
