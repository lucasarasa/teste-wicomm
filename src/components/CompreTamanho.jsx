import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SIZES = ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42"];

const arrowClassName =
  "h-6 w-6 rounded-full border-none bg-white text-brand-red shadow-[0_2px_5px_rgba(0,0,0,0.16)] hover:bg-white hover:text-brand-red";

function CompreTamanho() {
  const [selected, setSelected] = useState(SIZES[0]);

  return (
    <section className="py-5">
      <h2 className="text-ink mb-4 px-4 text-xl leading-6 font-semibold tracking-wide">
        COMPRE POR TAMANHO
      </h2>

      <Carousel opts={{ align: "start" }} className="px-10">
        <CarouselContent className="-ml-2">
          {SIZES.map((size) => {
            const isSelected = selected === size;
            return (
              <CarouselItem key={size} className="basis-1/4 pl-2">
                <button
                  type="button"
                  onClick={() => setSelected(size)}
                  aria-pressed={isSelected}
                  className={`border-brand-red mx-auto grid h-15 w-15 place-items-center rounded-full border-[1.7px] text-xl leading-6 font-semibold tracking-wide transition-colors ${
                    isSelected
                      ? "bg-brand-red text-cream"
                      : "text-brand-red-dark"
                  }`}
                >
                  {size}
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className={`left-1 ${arrowClassName}`} />
        <CarouselNext className={`right-1 ${arrowClassName}`} />
      </Carousel>
    </section>
  );
}

export default CompreTamanho;
