import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navItems = [
    { label: "Матрасы", href: "/mattresses" },
    { label: "Подушки", href: "/pillows" },
    { label: "Основания", href: "/bases" },
    { label: "Акции", href: "/promotions" },
    { label: "Доставка", href: "/delivery" },
    { label: "Магазины", href: "/stores" },
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Верхняя полоса */}
      <div className="bg-askona-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-6">
              <span>Бесплатная доставка от 10 000 ₽</span>
              <span>Гарантия до 25 лет</span>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Phone" size={14} />
              <span className="font-medium">8 (800) 200-80-90</span>
            </div>
          </div>
        </div>
      </div>

      {/* Основной хедер */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Логотип */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-askona-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h1 className="text-2xl font-bold text-askona-navy">ASKONA</h1>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-askona-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Правая часть */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="MapPin" size={16} className="mr-2" />
              Москва
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 bg-askona-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
