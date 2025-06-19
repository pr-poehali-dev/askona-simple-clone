import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-28">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl font-montserrat">
                <span className="block">Идеальный</span>
                <span className="block text-purple-600">сон начинается</span>
                <span className="block">с качества</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-3xl">
                Премиальные матрасы для здорового сна. Индивидуальная поддержка,
                натуральные материалы, гарантия качества.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg">
                  Консультация
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://cdn.poehali.dev/files/3b6b615a-a118-4e48-9cf2-762001ecaa41.jpg"
            alt="Современная спальня с качественным матрасом"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
