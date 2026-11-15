import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const userName = "Khunwana"

  return (
    <div>
      <h1>Internet Control Management System </h1>
      <p>Welcome to Our Cafe {userName}</p>
    </div>
  )
}

export default App
