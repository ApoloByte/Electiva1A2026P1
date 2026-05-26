import './App.css'
import { AnimalList } from './components/AnimalList'
import { ImageManager } from './components/ImageManager'
import { ProductList } from './components/ProductList'

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <AnimalList />
      <ImageManager />
      <ProductList />
    </div>
  )
}

export default App
