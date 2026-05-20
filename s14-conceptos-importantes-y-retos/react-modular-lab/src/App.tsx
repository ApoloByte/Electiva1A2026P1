import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Counter } from './components/Counter'

function App() {

  return (
	<div className="flex flex-col items-center h-svh w-svw mt-6 gap-2 justify-center">
		<Counter />
	</div>
  )
}

export default App
