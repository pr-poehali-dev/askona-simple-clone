import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  const products = [
    {
      id: "1",
      name: "Sleep Premium Memory",
      price: 45900,
      originalPrice: 52900,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      firmness: "Средней жёсткости",
      sizes: ["140x200", "160x200", "180x200"],
      features: ["Memory foam", "Гипоаллергенный", "Терморегуляция"],
      isPopular: true,
    },
    {
      id: "2",
      name: "Classic Comfort",
      price: 29900,
      image:
        "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=400&h=300&fit=crop",
      firmness: "Мягкий",
      sizes: ["80x200", "90x200", "140x200"],
      features: ["Натуральный латекс", "Дышащий материал", "Ортопедический"],
    },
    {
      id: "3",
      name: "Firm Support Pro",
      price: 38900,
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=300&fit=crop",
      firmness: "Жёсткий",
      sizes: ["140x200", "160x200", "180x200", "200x200"],
      features: ["Независимые пружины", "Усиленная поддержка", "Долговечность"],
    },
    {
      id: "4",
      name: "Eco Natural",
      price: 41900,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
      firmness: "Средней жёсткости",
      sizes: ["140x200", "160x200", "180x200"],
      features: [
        "100% натуральные материалы",
        "Бамбуковое волокно",
        "Антибактериальный",
      ],
    },
    {
      id: "5",
      name: "Luxe Edition",
      price: 67900,
      originalPrice: 74900,
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
      firmness: "Регулируемая",
      sizes: ["160x200", "180x200", "200x200"],
      features: [
        "Двусторонняя жёсткость",
        "Премиум материалы",
        "Гарантия 15 лет",
      ],
    },
    {
      id: "6",
      name: "Youth Comfort",
      price: 24900,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      firmness: "Средней жёсткости",
      sizes: ["80x200", "90x200"],
      features: ["Для подростков", "Поддержка роста", "Гипоаллергенный"],
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Пустая колонка для выравнивания с фильтрами */}
          <div className="lg:col-span-1 hidden lg:block"></div>

          {/* Сетка товаров */}
          <div className="lg:col-span-3 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Кнопка "Показать ещё" */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-askona-blue text-askona-blue hover:bg-askona-blue hover:text-white"
              >
                Показать ещё товары
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
