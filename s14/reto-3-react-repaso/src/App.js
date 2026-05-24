import { jsx as _jsx } from "react/jsx-runtime";
import { ProductManager } from './components/ProductManager';
// componente principal que carga la tienda
function App() {
    return (_jsx("main", { className: "app-shell", children: _jsx(ProductManager, {}) }));
}
export default App;
//# sourceMappingURL=App.js.map