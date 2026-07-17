import BenefitsBar from "./components/BenefitsBar";
import BigBanner from "./components/BigBanner";
import CategoryTabs from "./components/CategoryTabs";
import CompreTamanho from "./components/CompreTamanho";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NossasMarcas from "./components/NossasMarcas";
import NossosProdutos from "./components/NossosProdutos";
import Novidades from "./components/Novidades";
import StyleTiles from "./components/StyleTiles";

function App() {
  return (
    <div className="bg-page relative flex h-dvh w-full flex-col overflow-hidden">
      <Header />
      <h1 className="sr-only">
        Di Santinni — Tênis, chinelos e calçados esportivos
      </h1>
      <main className="-webkit-overflow-scrolling-touch flex-1 overflow-y-auto overscroll-contain pb-[calc(5rem+env(safe-area-inset-bottom))]">
        <Hero />
        <BenefitsBar />
        <NossosProdutos />
        <CompreTamanho />
        <StyleTiles />
        <CategoryTabs />
        <NossasMarcas />
        <Novidades />
        <BigBanner />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
