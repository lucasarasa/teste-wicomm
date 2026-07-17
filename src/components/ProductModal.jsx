import { X } from "lucide-react";
import { createPortal } from "react-dom";

function ProductModal({ product, onClose, onAddToCart }) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-cream w-full rounded-t-3xl p-5 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-muted-dark"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex w-full items-center justify-center rounded-2xl bg-white p-6">
          <img src={product.image} alt={product.name} className="h-60 w-auto" />
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <p className="text-muted text-xs">{product.brand}</p>
          <p className="text-ink text-lg">{product.name}</p>
          <p className="text-muted mt-2 text-xs font-semibold line-through">
            {product.oldPrice}
          </p>
          <p className="text-brand-red text-2xl font-semibold">
            {product.price}
          </p>
          <p className="text-muted mt-1 text-xs">
            <span className="text-[#C89B2A]">{product.clubPrice} </span>
            no Clube
          </p>
          <p className="text-muted text-xs">
            ou <span className="font-bold">{product.installments}</span> sem
            juros
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            onAddToCart(product);
            onClose();
          }}
          className="bg-brand-red mt-5 w-full rounded-full py-3.5 text-sm leading-[18px] font-bold text-white"
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default ProductModal;
