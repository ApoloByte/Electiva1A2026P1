import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProductCard } from './ProductCard';
import { useProductList } from './useProductList';
export const ProductManager = () => {
    const { products, loading, error, fetchProductList } = useProductList();
    const enabledProducts = products.filter((product) => product.isEnabled);
    // aqui mostramos los productos habilitados
    return (_jsxs("section", { className: "card", children: [_jsxs("div", { className: "header-row", children: [_jsx("h1", { className: "header-title", children: "Tienda bonita" }), _jsx("button", { className: "button-primary", type: "button", onClick: fetchProductList, children: loading ? 'Cargando...' : 'Ver productos nuevos' })] }), error ? _jsx("p", { className: "footer-note", children: error }) : null, _jsx("div", { className: "product-grid", children: enabledProducts.map((product) => (_jsx(ProductCard, { product: product }, product.name))) })] }));
};
//# sourceMappingURL=ProductManager.js.map