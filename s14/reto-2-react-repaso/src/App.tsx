import './App.css'
import { ImageManager } from './components/ImageManager'

// pagina principal 
function App() {
  return (
    <div className="min-h-screen bg-[#f8eff7] text-[#6d3f7a] px-4 py-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[#e8d6f0] bg-[#fff1fb] p-6 shadow-[0_24px_80px_-32px_rgba(109,63,122,0.18)] backdrop-blur-sm sm:p-10">
        <ImageManager />
      </div>
    </div>
  )
}

export default App
