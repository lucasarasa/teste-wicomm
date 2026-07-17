import { useState } from "react";

import iconCart from "../assets/icons/icon-cart.svg";
import iconSearch from "../assets/icons/icon-search.svg";
import dsLogo from "../assets/img/ds-logo.png";
import { useCart } from "../context/CartContext.jsx";
import CartDrawer from "./CartDrawer";
import SearchMenu from "./SearchMenu";

function Header() {
  const { count } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="border-hairline fixed inset-x-0 top-0 z-30 mx-auto flex w-full items-center justify-between border-b bg-white px-4 py-5 backdrop-blur-md">
      <button
        type="button"
        aria-label="Buscar"
        onClick={() => setSearchOpen(true)}
        className="grid h-5 w-5 place-items-center"
      >
        <img src={iconSearch} alt="" className="h-5 w-5" />
      </button>

      <button type="button" aria-label="Ir para o topo" onClick={scrollToTop}>
        <img src={dsLogo} alt="Di Santinni" className="h-6 object-contain" />
      </button>

      <button
        type="button"
        aria-label="Sacola"
        onClick={() => setCartOpen(true)}
        className="relative grid h-5 w-5 place-items-center"
      >
        <img src={iconCart} alt="" className="h-5 w-5" />
        {count > 0 && (
          <span className="bg-brand-red absolute -top-1.5 -right-1.5 grid h-3.5 w-3.5 place-items-center rounded-full text-[10px] leading-none font-medium text-white">
            {count}
          </span>
        )}
      </button>

      {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}
      {searchOpen && <SearchMenu onClose={() => setSearchOpen(false)} />}
    </header>
  );
}

export default Header;
