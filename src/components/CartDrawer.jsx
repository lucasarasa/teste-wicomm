import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { useCart } from "../context/CartContext.jsx";

function parsePrice(price) {
  return Number(price.replace(/[^\d,]/g, "").replace(",", "."));
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function CartDrawer({ onClose }) {
  const { items, increment, decrement } = useCart();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.product.price) * item.quantity,
    0,
  );

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Carrinho"
    >
      <div
        className="bg-cream flex h-full w-full max-w-sm flex-col p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-ink text-lg font-semibold">Seu carrinho</h2>
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            className="text-muted-dark grid h-8 w-8 place-items-center rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-muted text-sm">Seu carrinho está vazio.</p>
        ) : (
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
            {items.map((item) => (
              <div key={item.product.name} className="flex gap-3">
                <div className="bg-surface-soft grid h-20 w-20 shrink-0 place-items-center rounded-2xl">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-muted text-xs">{item.product.brand}</p>
                    <p className="text-ink line-clamp-2 text-sm">
                      {item.product.name}
                    </p>
                    <p className="text-brand-red text-sm font-semibold">
                      {item.product.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Diminuir quantidade"
                      onClick={() => decrement(item.product.name)}
                      className="border-brand-red text-brand-red grid h-7 w-7 place-items-center rounded-full border"
                    >
                      −
                    </button>
                    <span className="text-ink w-4 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Aumentar quantidade"
                      onClick={() => increment(item.product.name)}
                      className="border-brand-red text-brand-red grid h-7 w-7 place-items-center rounded-full border"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="border-hairline mt-4 flex items-center justify-between border-t pt-4 text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="text-ink font-semibold">
              {formatPrice(subtotal)}
            </span>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

export default CartDrawer;
