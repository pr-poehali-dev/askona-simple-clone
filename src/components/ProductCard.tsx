import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  firmness: string;
  sizes: string[];
  features: string[];
  isPopular?: boolean;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  firmness,
  features,
  isPopular,
  isNew,
  discount,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
      <div className="relative overflow-hidden">
        {/* Бейджи */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isNew && <Badge className="bg-green-500 text-white">Новинка</Badge>}
          {isPopular && (
            <Badge className="bg-askona-red text-white">Хит продаж</Badge>
          )}
          {discount && (
            <Badge className="bg-orange-500 text-white">-{discount}%</Badge>
          )}
        </div>

        {/* Кнопка в избранное */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white"
        >
          <Icon name="Heart" size={18} />
        </Button>

        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-askona-navy mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <Badge
            variant="outline"
            className="text-xs border-askona-blue text-askona-blue"
          >
            {firmness}
          </Badge>
          <div className="flex items-center text-xs text-gray-500">
            <Icon
              name="Star"
              size={12}
              className="fill-yellow-400 text-yellow-400 mr-1"
            />
            4.8 (127)
          </div>
        </div>

        <ul className="text-sm text-gray-600 mb-4 space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center">
              <Icon
                name="Check"
                size={14}
                className="text-green-500 mr-2 flex-shrink-0"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-askona-navy">
              {price.toLocaleString("ru-RU")} ₽
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-4">
          <Icon name="Truck" size={12} className="inline mr-1" />
          Доставка завтра
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 space-y-2">
        <Button className="w-full bg-askona-blue hover:bg-askona-navy text-white">
          В корзину
        </Button>
        <Button
          variant="outline"
          className="w-full text-askona-blue border-askona-blue hover:bg-askona-blue hover:text-white"
        >
          Быстрый просмотр
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
