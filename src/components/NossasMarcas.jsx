import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import marcasBanner from "../assets/img/marcas-banner.png";
import ProductCard from "./ProductCard";

const BRANDS = ["MIZUNO", "ADIDAS", "OLYMPIKUS", "FILA", "KENNER", "REDLEY"];

const arrowClassName =
  "h-6 w-6 rounded-full border-none bg-white text-brand-red shadow-[0_2px_5px_rgba(0,0,0,0.16)] hover:bg-white hover:text-brand-red";

function NossasMarcas() {
  const [active, setActive] = useState(BRANDS[0]);

  return (
    <section className="from-brand-maroon to-brand-red bg-linear-to-b px-4 py-8">
      <h2 className="text-cream mb-5 text-2xl leading-7 font-semibold tracking-wide">
        NOSSAS MARCAS
      </h2>

      <div className="no-scrollbar mb-6 flex overflow-x-auto">
        {BRANDS.map((brand) => (
          <button
            key={brand}
            type="button"
            onClick={() => setActive(brand)}
            className={`relative shrink-0 px-3 pb-2 text-base leading-6 font-semibold transition-colors first:pl-0 ${
              active === brand
                ? "text-cream after:bg-black"
                : "text-ink-soft after:bg-white"
            } after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full`}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="relative mb-6 h-74 w-full overflow-hidden rounded-3xl">
        <img
          src={marcasBanner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      <Carousel opts={{ align: "start" }} className="-mx-4 px-4">
        <CarouselContent className="-ml-3.5">
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className={`left-1 ${arrowClassName}`} />
        <CarouselNext className={`right-1 ${arrowClassName}`} />
      </Carousel>
    </section>
  );
}

export default NossasMarcas;
