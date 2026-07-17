import { X } from "lucide-react";
import { createPortal } from "react-dom";

const SECTIONS = [
  { id: "nossos-produtos", label: "Nossos Produtos" },
  { id: "compre-por-tamanho", label: "Compre por Tamanho" },
  { id: "categorias", label: "Categorias" },
  { id: "nossas-marcas", label: "Nossas Marcas" },
  { id: "novidades", label: "Novidades" },
];

function SearchMenu({ onClose }) {
  const handleSelect = (id) => {
    onClose();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-cream w-full rounded-t-3xl p-5 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-ink text-lg font-semibold">Ir para</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-muted-dark"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSelect(section.id)}
              className="border-hairline text-ink hover:text-brand-red border-b py-3.5 text-left text-sm font-semibold last:border-none"
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default SearchMenu;
