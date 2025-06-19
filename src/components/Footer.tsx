import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-askona-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Основной контент футера */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-askona-navy font-bold">A</span>
              </div>
              <h3 className="text-xl font-bold">ASKONA</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Ортопедические матрасы премиум-класса для здорового сна.
              Собственное производство с 1990 года.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <Icon name="Phone" size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <Icon name="Mail" size={16} />
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                <Icon name="MapPin" size={16} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="/mattresses"
                  className="hover:text-white transition-colors"
                >
                  Матрасы
                </a>
              </li>
              <li>
                <a
                  href="/pillows"
                  className="hover:text-white transition-colors"
                >
                  Подушки
                </a>
              </li>
              <li>
                <a href="/bases" className="hover:text-white transition-colors">
                  Основания
                </a>
              </li>
              <li>
                <a
                  href="/accessories"
                  className="hover:text-white transition-colors"
                >
                  Аксессуары
                </a>
              </li>
              <li>
                <a
                  href="/promotions"
                  className="hover:text-white transition-colors"
                >
                  Акции
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="/delivery"
                  className="hover:text-white transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="/payment"
                  className="hover:text-white transition-colors"
                >
                  Оплата
                </a>
              </li>
              <li>
                <a
                  href="/warranty"
                  className="hover:text-white transition-colors"
                >
                  Гарантия
                </a>
              </li>
              <li>
                <a
                  href="/return"
                  className="hover:text-white transition-colors"
                >
                  Возврат
                </a>
              </li>
              <li>
                <a href="/test" className="hover:text-white transition-colors">
                  Тест на подбор
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                <span>8 (800) 200-80-90</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                <span>info@askona.ru</span>
              </div>
              <div className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-2 mt-0.5" />
                <span>Москва, ул. Тверская, 1</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                <span>Ежедневно: 9:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 ASKONA. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
