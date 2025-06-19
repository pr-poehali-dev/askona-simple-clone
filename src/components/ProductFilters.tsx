import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([10000, 100000]);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Левая боковая панель фильтров */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-askona-navy mb-4">
                  Фильтры
                </h3>
              </div>

              {/* Цена */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Цена</h4>
                <div className="space-y-3">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={5000}
                    max={150000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange[0].toLocaleString()} ₽</span>
                    <span>{priceRange[1].toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>

              {/* Жесткость */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Жесткость</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span className="text-sm">Мягкий</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span className="text-sm">Средний</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <Checkbox />
                    <span className="text-sm">Жесткий</span>
                  </label>
                </div>
              </div>

              {/* Размер */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Размер</h4>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите размер" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="80x200">80×200 см</SelectItem>
                    <SelectItem value="90x200">90×200 см</SelectItem>
                    <SelectItem value="140x200">140×200 см</SelectItem>
                    <SelectItem value="160x200">160×200 см</SelectItem>
                    <SelectItem value="180x200">180×200 см</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" className="w-full">
                Сбросить фильтры
              </Button>
            </div>
          </div>

          {/* Правая часть - заголовок и сортировка */}
          <div className="lg:col-span-3 mt-6 lg:mt-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-askona-navy">
                  Каталог матрасов
                </h2>
                <p className="text-gray-600 mt-1">Найдено 127 товаров</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <span className="text-sm text-gray-600">Сортировать:</span>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-asc">
                      Цена по возрастанию
                    </SelectItem>
                    <SelectItem value="price-desc">Цена по убыванию</SelectItem>
                    <SelectItem value="new">Новинки</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
