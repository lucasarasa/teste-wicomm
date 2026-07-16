import { createPortal } from "react-dom";

function ProductModal({ product, onClose, onAddToCart }) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full rounded-t-3xl bg-cream p-5 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-xl text-muted-dark"
          >
            X
          </button>
        </div>

        <div className="flex items-center justify-center rounded-2xl bg-white p-6  w-full">
          <img src={product.image} alt={product.name} className="h-60 w-auto" />
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <p className="text-xs text-muted">{product.brand}</p>
          <p className="text-lg text-ink">{product.name}</p>
          <p className="mt-2 text-xs font-semibold text-muted line-through">
            {product.oldPrice}
          </p>
          <p className="text-2xl font-semibold text-brand-red">
            {product.price}
          </p>
          <p className="mt-1 text-xs text-muted">
            <span className="text-[#C89B2A]">{product.clubPrice} </span>
            no Clube
          </p>
          <p className="text-xs text-muted">
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
          className="mt-5 w-full rounded-full bg-brand-red py-3.5 text-sm font-bold leading-[18px] text-white"
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    </div>,
    document.body
  );
}

export default ProductModal;
