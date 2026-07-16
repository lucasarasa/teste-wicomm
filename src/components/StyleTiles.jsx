import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import tileConverse from "../assets/img/tile-converse.png";
import tileOlympikus from "../assets/img/tile-olympikus.png";
import tileKenner from "../assets/img/tile-kenner.png";
import logoConverse from "../assets/icons/logo-converse.svg";
import logoOlympikus from "../assets/icons/logo-olympikus.svg";
import kennerSandalsLogo from "../assets/img/kenner-sandals-logo.png";

const TILES = [
  {
    key: "converse-1",
    image: tileConverse,
    logo: logoConverse,
    logoAlt: "Converse",
    logoClass: "h-10.5 w-15.5",
  },
  {
    key: "olympikus",
    image: tileOlympikus,
    logo: logoOlympikus,
    logoAlt: "Olympikus",
    logoClass: "h-2.75 w-25.25",
  },
  {
    key: "kenner",
    image: tileKenner,
    logo: kennerSandalsLogo,
    logoAlt: "Kenner",
    logoClass: "h-3.75 w-17",
  },
  {
    key: "converse-2",
    image: tileConverse,
    logo: logoConverse,
    logoAlt: "Converse",
    logoClass: "h-8 w-12",
  },
  {
    key: "converse-3",
    image: tileConverse,
    logo: logoConverse,
    logoAlt: "Converse",
    logoClass: "h-8 w-12",
  },
];

function StyleTiles() {
  return (
    <section className="py-5">
      <Carousel opts={{ align: "start" }} className="px-4">
        <CarouselContent className="-ml-2.25">
          {TILES.map((tile) => (
            <CarouselItem key={tile.key} className="basis-auto pl-2.25">
              <div className="relative flex h-53.25 w-38.75 items-end justify-center overflow-hidden rounded-2xl">
                <img
                  src={tile.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <img
                  src={tile.logo}
                  alt={tile.logoAlt}
                  className={`relative mb-3.5 object-contain ${tile.logoClass}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default StyleTiles;
