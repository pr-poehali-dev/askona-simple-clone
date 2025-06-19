import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductFilters from "@/components/ProductFilters";
import ProductCatalog from "@/components/ProductCatalog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductFilters />
      <ProductCatalog />
      <Footer />
    </div>
  );
};

export default Index;
