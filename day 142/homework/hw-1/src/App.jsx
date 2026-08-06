import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>    
      <h1>{counter}</h1>

      <button onClick={()=>
        setCounter(counter+1)
      }>plus</button>

      <button onClick={()=>
        setCounter(counter-1)
      }>minus</button>

      <button onClick={()=>
        setCounter(counter*2)
      }>multiple</button>
    </>
  )
}

export default App
