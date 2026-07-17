import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "./ProductCard";

const TABS = [
  "MASCULINO",
  "FEMININO",
  "INFANTIL",
  "BABY",
  "LANÇAMENTOS",
  "FAVORITOS",
];

const arrowClassName =
  "h-6 w-6 rounded-full border-none bg-white text-brand-red shadow-[0_2px_5px_rgba(0,0,0,0.16)] hover:bg-white hover:text-brand-red";

function CategoryTabs() {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section className="py-5">
      <div className="no-scrollbar flex overflow-x-auto px-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`relative shrink-0 px-3 pb-2 text-base font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full first:pl-0 ${
              active === tab
                ? "text-brand-red after:bg-brand-red"
                : "text-ink-soft after:bg-hairline"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <Carousel opts={{ align: "start" }} className="mt-6 px-4">
        <CarouselContent className="-ml-3.5">
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard compact />
          </CarouselItem>
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard compact />
          </CarouselItem>
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard compact />
          </CarouselItem>
          <CarouselItem className="basis-auto pl-3.5">
            <ProductCard compact />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className={`left-1 ${arrowClassName}`} />
        <CarouselNext className={`right-1 ${arrowClassName}`} />
      </Carousel>
    </section>
  );
}

export default CategoryTabs;
