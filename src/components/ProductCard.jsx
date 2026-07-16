import { useState } from "react";
import productShoe from "../assets/img/product-shoe.png";

function HeartIcon({ filled, className }) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.9219 21.6249L3.725 13.0895C1.41666 10.6853 1.5625 6.74365 4.04166 4.53115C6.50104 2.33636 10.2302 2.7624 12.174 5.46136L12.501 5.91449L12.8281 5.46136C14.7719 2.7624 18.501 2.33636 20.9604 4.53115C23.4396 6.74469 23.5854 10.6874 21.276 13.0905L13.0781 21.627C13.0038 21.7056 12.9143 21.7682 12.815 21.811C12.7157 21.8538 12.6087 21.8758 12.5005 21.8758C12.3924 21.8758 12.2854 21.8538 12.1861 21.811C12.0867 21.7682 11.9972 21.7056 11.9229 21.627L11.9219 21.6249Z"
        fill={filled ? "#C8102E" : "none"}
        stroke={filled ? "#C8102E" : "#555555"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const DEFAULT_PRODUCT = {
  discount: "-20%",
  brand: "MIZUNO",
  name: "Tênis Mizuno Wave Endeavor 3",
  oldPrice: "R$ 799,00",
  price: "R$ 499,90",
  clubPrice: "R$ 399,00",
  installments: "5x de R$ 100,00",
  image: productShoe,
};

function ProductCard({ product = DEFAULT_PRODUCT, compact = false }) {
  const p = { ...DEFAULT_PRODUCT, ...product };
  const [favorited, setFavorited] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setFavorited((v) => !v);
  };

  if (compact) {
    return (
      <article className="my-1 flex w-[169px] shrink-0 flex-col overflow-hidden rounded-3xl bg-cream shadow-[0_3px_15px_rgba(0,0,0,0.07)]">
        <div className="relative h-[156px] w-full shrink-0 bg-[#F6F6F6]">
          <span className="absolute left-4 top-2 rounded-full bg-brand-red px-3 py-0.5 text-[10px] font-semibold text-cream">
            {p.discount}
          </span>

          <button
            type="button"
            aria-label={favorited ? "Remover dos favoritos" : "Favoritar"}
            aria-pressed={favorited}
            onClick={handleFavoriteClick}
            className="absolute right-4 top-2 grid h-[19px] w-[19px] place-items-center rounded-full bg-white"
          >
            <HeartIcon filled={favorited} className="h-3 w-3" />
          </button>

          <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 bg-[#FAFAF8] px-3 py-3">
          <div className="flex flex-col gap-1">
            <p className="text-[9px] leading-[11px] text-muted">
              {p.brand}
            </p>

            <p className="line-clamp-2 text-xs leading-[15px] text-ink">
              {p.name}
            </p>
          </div>

          <div>
            <p className="text-[9px] leading-[14px] text-muted line-through">
              {p.oldPrice}
            </p>

            <p className="text-[15px] font-semibold leading-[18px] text-brand-red">
              {p.price}
            </p>
          </div>

          <div>
            <p className="text-[9px] leading-4 text-muted">
              <span className="text-[#C89B2A]">{p.clubPrice} </span>
              no Clube
            </p>
            <p className="text-[9px] leading-4 text-muted">
              ou
              <span className="font-bold"> {p.installments} </span>
              sem juros
            </p>
          </div>

          <button
            type="button"
            className="mt-auto rounded-full bg-brand-red py-2 text-[11px] font-bold leading-[14px] text-white"
          >
            COMPRAR AGORA
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="flex w-56 shrink-0 flex-col items-center gap-3 overflow-hidden rounded-3xl bg-cream shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="relative h-[207px] w-full shrink-0 rounded-t-3xl bg-surface-soft">
        <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 text-[10px] font-semibold leading-[10px] text-cream">
          {p.discount}
        </span>
        <button
          type="button"
          aria-label={favorited ? "Remover dos favoritos" : "Favoritar"}
          aria-pressed={favorited}
          onClick={handleFavoriteClick}
          className="absolute right-2 top-2 grid h-[25px] w-[25px] place-items-center rounded-full bg-white"
        >
          <HeartIcon filled={favorited} className="h-4 w-4" />
        </button>
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex w-full flex-col gap-3 px-3.5 pb-3.5">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-normal leading-[15px] text-muted">
            {p.brand}
          </p>
          <p className="text-base leading-5 text-ink">{p.name}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-semibold leading-[18px] text-muted line-through">
            {p.oldPrice}
          </p>
          <p className="text-xl font-semibold leading-6 text-brand-red">
            {p.price}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs leading-[22px] text-muted">
            <span className="text-[#C89B2A]">{p.clubPrice} </span>
            no Clube
          </p>
          <p className="text-xs leading-[22px] text-muted">
            ou <span className="font-bold">{p.installments}</span> sem
            juros
          </p>
        </div>
        <button
          type="button"
          className="rounded-full bg-brand-red px-6 py-[15px] text-sm font-bold leading-[18px] text-white"
        >
          COMPRAR AGORA
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
