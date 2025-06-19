import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const ProductFilters = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Каталог матрасов
          </h2>

          <div className="flex flex-wrap gap-3">
            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Жёсткость" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="soft">Мягкий</SelectItem>
                <SelectItem value="medium">Средний</SelectItem>
                <SelectItem value="firm">Жёсткий</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Размер" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="80x200">80x200 см</SelectItem>
                <SelectItem value="90x200">90x200 см</SelectItem>
                <SelectItem value="140x200">140x200 см</SelectItem>
                <SelectItem value="160x200">160x200 см</SelectItem>
                <SelectItem value="180x200">180x200 см</SelectItem>
                <SelectItem value="200x200">200x200 см</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">Сбросить фильтры</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
