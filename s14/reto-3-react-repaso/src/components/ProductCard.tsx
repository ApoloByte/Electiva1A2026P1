import type { Product } from './useProductList'

interface ProductCardProps {
  product: Product
}

// tarjeta simple para mostrar datos de un producto
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-card-body">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-category">{product.category.name}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-meta">
          <strong>Precio:</strong> ${product.price.toLocaleString('es-CO')}
        </p>
        <p className="product-meta">
          <strong>Cantidad:</strong> {product.quantity}
        </p>
        <p className="product-meta">
          <strong>Dimensiones:</strong> {product.height} x {product.width} x {product.length} cm
        </p>
        <p className={`status-tag ${product.isEnabled ? 'status-enabled' : 'status-disabled'}`}>
          {product.isEnabled ? 'Habilitado' : 'Deshabilitado'}
        </p>
      </div>
    </article>
  )
}
