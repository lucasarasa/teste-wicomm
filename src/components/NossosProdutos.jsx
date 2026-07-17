import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import categoria1 from "../assets/img/categoria-1.png";
import categoria2 from "../assets/img/categoria-2.png";
import categoria3 from "../assets/img/categoria-3.png";
import categoria4 from "../assets/img/categoria-4.png";
import categoria5 from "../assets/img/categoria-5.png";
import categoria6 from "../assets/img/categoria-6.png";

const CATEGORIES = [
  { label: "chinelos", image: categoria1 },
  { label: "tênis", image: categoria2 },
  { label: "sapatênis", image: categoria3 },
  { label: "treino", image: categoria4 },
  { label: "sandália", image: categoria5 },
  { label: "mocassim", image: categoria6 },
];

const arrowClassName =
  "h-6 w-6 rounded-full border-none bg-white text-brand-red shadow-[0_2px_5px_rgba(0,0,0,0.16)] hover:bg-white hover:text-brand-red";

function NossosProdutos() {
  return (
    <section className="py-5">
      <h2 className="text-ink mb-4 px-4 text-xl leading-6 font-semibold tracking-wide">
        NOSSOS PRODUTOS
      </h2>

      <Carousel opts={{ align: "start" }} className="px-4">
        <CarouselContent className="-ml-2.5">
          {CATEGORIES.map((cat) => (
            <CarouselItem key={cat.label} className="basis-auto pl-2.5">
              <div className="relative flex h-59.5 w-40.75 items-end justify-start overflow-hidden rounded-2xl px-3">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <button
                  type="button"
                  className="bg-cream text-brand-red relative mb-3 items-start rounded-full px-4 py-2 text-sm leading-4.5 font-semibold"
                >
                  {cat.label}
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={`left-1 ${arrowClassName}`} />
        <CarouselNext className={`right-1 ${arrowClassName}`} />
      </Carousel>
    </section>
  );
}

export default NossosProdutos;
