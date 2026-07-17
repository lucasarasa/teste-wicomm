import { useState } from "react";

import navHeart from "../assets/icons/nav-heart.svg";
import navHome from "../assets/icons/nav-home.svg";
import navPerson from "../assets/icons/nav-person.svg";
import navScan from "../assets/icons/nav-scan.svg";
import navSearch from "../assets/icons/nav-search.svg";

const TABS = [
  { key: "home", icon: navHome, label: "Início" },
  { key: "bag", icon: navSearch, label: "Sacola" },
  { key: "scan", icon: navScan, label: "Escanear" },
  { key: "filters", icon: navHeart, label: "Filtros" },
  { key: "profile", icon: navPerson, label: "Perfil" },
];

function NavBar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="border-hairline fixed inset-x-0 bottom-0 z-20 mx-auto flex max-w-full items-center justify-between border-t bg-white px-2 pt-7 pb-6">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          aria-label={tab.label}
          onClick={() => setActive(tab.key)}
          className="grid flex-1 place-items-center gap-1 py-1"
        >
          <img
            src={tab.icon}
            alt=""
            className={`h-5 w-full object-contain ${active === tab.key ? "" : "opacity-60"}`}
          />
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
