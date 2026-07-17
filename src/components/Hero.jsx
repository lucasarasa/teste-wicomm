import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import bigBanner from "../assets/img/big-banner.webp";
import heroImg from "../assets/img/hero.webp";
import marcasBanner from "../assets/img/marcas-banner.webp";

const SLIDES = [
  {
    image: heroImg,
    oldPrice: "R$ 799,00",
    discount: "20% OFF",
    price: "R$ 350,00",
  },
  {
    image: bigBanner,
    oldPrice: "R$ 599,00",
    discount: "30% OFF",
    price: "R$ 419,00",
  },
  {
    image: marcasBanner,
    oldPrice: "R$ 999,00",
    discount: "25% OFF",
    price: "R$ 749,00",
  },
];

function Hero() {
  const [api, setApi] = useState(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <Carousel
      opts={{ loop: true }}
      setApi={setApi}
      className="relative h-175.5 w-full overflow-hidden"
    >
      <CarouselContent className="ml-0 h-175.5">
        {SLIDES.map((slide, index) => (
          <CarouselItem key={index} className="h-175.5 basis-full pl-0">
            <section className="relative h-full w-full">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="pointer-events-none absolute inset-x-0 bottom-9 flex flex-col gap-5 px-12">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-cream/90 text-lg leading-4.5 tracking-wide line-through">
              {SLIDES[selected].oldPrice}
            </span>
            <span className="bg-brand-red text-cream rounded-full px-2.5 text-[11px] leading-5.25 font-semibold">
              {SLIDES[selected].discount}
            </span>
          </div>
          <span className="text-cream self-start text-[55px] leading-9.25 font-black tracking-wide whitespace-nowrap">
            {SLIDES[selected].price}
          </span>
        </div>

        <div className="pointer-events-auto flex justify-center">
          <button
            type="button"
            className="bg-brand-red text-cream rounded-full px-7 py-2 text-sm leading-5 font-semibold"
          >
            CONFIRA
          </button>
        </div>

        <div className="flex justify-center gap-2.5">
          {SLIDES.map((_, dotIndex) => (
            <span
              key={dotIndex}
              className={`h-2 w-2 rounded-full ${
                dotIndex === selected ? "bg-brand-red" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
}

export default Hero;
