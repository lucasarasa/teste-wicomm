import Header from "./components/Header";
import Hero from "./components/Hero";
import BenefitsBar from "./components/BenefitsBar";
import NossosProdutos from "./components/NossosProdutos";
import CompreTamanho from "./components/CompreTamanho";
import StyleTiles from "./components/StyleTiles";
import CategoryTabs from "./components/CategoryTabs";
import NossasMarcas from "./components/NossasMarcas";
import BigBanner from "./components/BigBanner";
import Novidades from "./components/Novidades";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="mx-auto min-h-screen w-full bg-page pb-24">
      <Header />
      <h1 className="sr-only">
        Di Santinni — Tênis, chinelos e calçados esportivos
      </h1>
      <main>
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
