import './App.css'
import { AnimalComponent } from './components/AnimalList'
import { ImageManager } from './components/ImageManager'
import { ProductList } from './components/ProductList'

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <AnimalComponent />
      <ImageManager />
      <ProductList />
    </div>
  )
}

export default App
