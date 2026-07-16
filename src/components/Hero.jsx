import heroImg from "../assets/img/hero.png";

function Hero() {
  return (
    <section className="relative h-175.5 w-full overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-9 flex flex-col gap-5 px-12">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg leading-4.5 tracking-wide text-cream/90 line-through">
              R$ 799,00
            </span>
            <span className="rounded-full bg-brand-red px-2.5 text-[11px] font-semibold leading-5.25 text-cream">
              20% OFF
            </span>
          </div>
          <span className="self-start text-[55px] font-black leading-9.25 tracking-wide text-cream">
            R$ 350,00
          </span>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-full bg-brand-red px-7 py-2 text-sm font-semibold leading-5 text-cream"
          >
            CONFIRA
          </button>
        </div>

        <div className="flex justify-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-brand-red" />
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
