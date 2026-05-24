import { ProductCard } from './ProductCard'
import { useProductList } from './useProductList'

export const ProductManager = () => {
  const { products, loading, error, fetchProductList } = useProductList()
  const enabledProducts = products.filter((product) => product.isEnabled)

  // aqui mostramos los productos habilitados
  return (
    <section className="card">
      <div className="header-row">
        <h1 className="header-title">Tienda bonita</h1>
        <button className="button-primary" type="button" onClick={fetchProductList}>
          {loading ? 'Cargando...' : 'Ver productos nuevos'}
        </button>
      </div>

      {error ? <p className="footer-note">{error}</p> : null}

      <div className="product-grid">
        {enabledProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  )
}
