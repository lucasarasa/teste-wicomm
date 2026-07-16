import dsLogo from "../assets/img/ds-logo.png";
import iconSearch from "../assets/icons/icon-search.svg";
import iconCart from "../assets/icons/icon-cart.svg";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto flex w-full items-center justify-between bg-white px-4 py-5 backdrop-blur-md border-b border-hairline">
      <button
        type="button"
        aria-label="Buscar"
        className="grid h-5 w-5 place-items-center"
      >
        <img src={iconSearch} alt="" className="h-5 w-5" />
      </button>

      <img src={dsLogo} alt="Di Santinni" className="h-6 object-contain" />

      <button
        type="button"
        aria-label="Sacola"
        className="relative grid h-5 w-5 place-items-center"
      >
        <img src={iconCart} alt="" className="h-5 w-5" />
        <span className="absolute -right-1.5 -top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-brand-red text-[10px] font-medium leading-none text-white">
          1
        </span>
      </button>
    </header>
  );
}

export default Header;
