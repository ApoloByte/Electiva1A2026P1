import type { Product } from "../interfaces";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card">
      <div className="product-badge" data-enabled={product.isEnabled}>
        {product.isEnabled ? "Activo" : "Inactivo"}
      </div>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://via.placeholder.com/300x200?text=Sin+Imagen";
        }}
      />
      <div className="product-info">
        <span className="product-category">{product.category.name}</span>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>

        <div className="product-details">
          <div className="detail-item">
            <span className="detail-label">💰 Precio</span>
            <span className="detail-value">${product.price.toFixed(2)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">📦 Cantidad</span>
            <span className="detail-value">{product.quantity}</span>
          </div>
        </div>

        <div className="product-dimensions">
          <span className="dim-label">Dimensiones (cm):</span>
          <div className="dim-values">
            <span>↕ {product.height}</span>
            <span>↔ {product.width}</span>
            <span>↗ {product.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;