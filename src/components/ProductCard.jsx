import { Heart } from "lucide-react";
import { useState } from "react";

import productShoe from "../assets/img/product-shoe.png";
import { useCart } from "../context/CartContext.jsx";
import ProductModal from "./ProductModal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setFavorited((v) => !v);
  };

  const handleBuyClick = (e) => {
    e.stopPropagation();
    addToCart(p);
  };

  const modal = modalOpen && (
    <ProductModal
      product={p}
      onClose={() => setModalOpen(false)}
      onAddToCart={addToCart}
    />
  );

  if (compact) {
    return (
      <>
        <article
          onClick={() => setModalOpen(true)}
          className="bg-cream my-1 flex w-42.25 shrink-0 cursor-pointer flex-col overflow-hidden rounded-3xl shadow-[0_3px_15px_rgba(0,0,0,0.07)] sm:w-48 md:w-52"
        >
          <div className="relative h-39 w-full shrink-0 bg-[#F6F6F6] sm:h-44 md:h-48">
            <span className="bg-brand-red text-cream absolute top-2 left-4 rounded-full px-3 py-0.5 text-[10px] font-semibold">
              {p.discount}
            </span>

            <button
              type="button"
              aria-label={favorited ? "Remover dos favoritos" : "Favoritar"}
              aria-pressed={favorited}
              onClick={handleFavoriteClick}
              className="absolute top-2 right-4 grid h-[19px] w-[19px] place-items-center rounded-full bg-white"
            >
              <Heart
                className="h-3 w-3"
                fill={favorited ? "#C8102E" : "none"}
                stroke={favorited ? "#C8102E" : "#555555"}
                strokeWidth={2}
              />
            </button>

            <img
              src={p.image}
              alt={p.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-2 bg-[#FAFAF8] px-3 py-3">
            <div className="flex flex-col gap-1">
              <p className="text-muted text-[9px] leading-[11px]">{p.brand}</p>

              <p className="text-ink line-clamp-2 text-xs leading-[15px]">
                {p.name}
              </p>
            </div>

            <div>
              <p className="text-muted text-[9px] leading-[14px] line-through">
                {p.oldPrice}
              </p>

              <p className="text-brand-red text-[15px] leading-[18px] font-semibold">
                {p.price}
              </p>
            </div>

            <div>
              <p className="text-muted text-[9px] leading-4">
                <span className="text-[#C89B2A]">{p.clubPrice} </span>
                no Clube
              </p>
              <p className="text-muted text-[9px] leading-4">
                ou
                <span className="font-bold"> {p.installments} </span>
                sem juros
              </p>
            </div>

            <button
              type="button"
              onClick={handleBuyClick}
              className="bg-brand-red mt-auto rounded-full py-2 text-[11px] leading-[14px] font-bold text-white"
            >
              COMPRAR AGORA
            </button>
          </div>
        </article>
        {modal}
      </>
    );
  }

  return (
    <>
      <article
        onClick={() => setModalOpen(true)}
        className="bg-cream flex w-56 shrink-0 cursor-pointer flex-col items-center gap-3 overflow-hidden rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:w-60 md:w-64"
      >
        <div className="bg-surface-soft relative h-51.75 w-full shrink-0 rounded-t-3xl sm:h-56 md:h-60">
          <span className="bg-brand-red text-cream absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] leading-[10px] font-semibold">
            {p.discount}
          </span>
          <button
            type="button"
            aria-label={favorited ? "Remover dos favoritos" : "Favoritar"}
            aria-pressed={favorited}
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 grid h-[25px] w-[25px] place-items-center rounded-full bg-white"
          >
            <Heart
              className="h-4 w-4"
              fill={favorited ? "#C8102E" : "none"}
              stroke={favorited ? "#C8102E" : "#555555"}
              strokeWidth={2}
            />
          </button>
          <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col gap-3 px-3.5 pb-3.5">
          <div className="flex flex-col gap-1">
            <p className="text-muted text-xs leading-[15px] font-normal">
              {p.brand}
            </p>
            <p className="text-ink text-base leading-5">{p.name}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-muted text-xs leading-[18px] font-semibold line-through">
              {p.oldPrice}
            </p>
            <p className="text-brand-red text-xl leading-6 font-semibold">
              {p.price}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-muted text-xs leading-[22px]">
              <span className="text-[#C89B2A]">{p.clubPrice} </span>
              no Clube
            </p>
            <p className="text-muted text-xs leading-[22px]">
              ou <span className="font-bold">{p.installments}</span> sem juros
            </p>
          </div>
          <button
            type="button"
            onClick={handleBuyClick}
            className="bg-brand-red rounded-full px-6 py-[15px] text-sm leading-[18px] font-bold text-white"
          >
            COMPRAR AGORA
          </button>
        </div>
      </article>
      {modal}
    </>
  );
}

export default ProductCard;
