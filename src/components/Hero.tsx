import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Левая часть */}
          <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <Badge className="mb-4 bg-askona-red text-white">
              🔥 Скидки до 50%
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-askona-navy mb-6">
              Здоровый сон
              <br />
              <span className="text-askona-blue">начинается здесь</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Ортопедические матрасы премиум-класса. Индивидуальная поддержка
              позвоночника, натуральные материалы и гарантия качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-askona-blue hover:bg-askona-navy text-white"
              >
                Выбрать матрас
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-askona-blue text-askona-blue hover:bg-askona-blue hover:text-white"
              >
                Тест на подбор
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Icon name="Truck" size={16} className="mr-2" />
                Доставка за 1 день
              </div>
              <div className="flex items-center">
                <Icon name="Shield" size={16} className="mr-2" />
                Гарантия до 25 лет
              </div>
            </div>
          </div>

          {/* Правая часть */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-100 opacity-50"></div>
            <img
              className="w-full h-96 lg:h-full object-cover"
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
              alt="Качественный матрас в современной спальне"
            />
            <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Сейчас покупают</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">+127 заказов сегодня</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
