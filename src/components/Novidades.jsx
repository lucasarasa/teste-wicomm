import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const arrowClassName =
  "h-6 w-6 rounded-full border-none bg-white text-brand-red shadow-[0_2px_5px_rgba(0,0,0,0.16)] hover:bg-white hover:text-brand-red";

function Novidades() {
  return (
    <section className="py-5">
      <h2 className="mb-4 px-4 text-xl font-semibold leading-6 tracking-wide text-ink">
        NOVIDADES
      </h2>

      <Carousel opts={{ align: "start" }} className="px-4">
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
        </CarouselContent>

        <CarouselPrevious className={`left-1 ${arrowClassName}`} />
        <CarouselNext className={`right-1 ${arrowClassName}`} />
      </Carousel>
    </section>
  );
}

export default Novidades;
