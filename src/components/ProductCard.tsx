import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  firmness,
  features,
  isPopular,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {isPopular && (
          <Badge className="absolute top-3 left-3 z-10 bg-purple-600">
            Популярный
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
          {name}
        </h3>

        <div className="mb-3">
          <Badge variant="outline" className="text-xs">
            {firmness}
          </Badge>
        </div>

        <ul className="text-sm text-gray-600 mb-4 space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-1 h-1 bg-purple-600 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">
            {price.toLocaleString("ru-RU")} ₽
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice.toLocaleString("ru-RU")} ₽
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
