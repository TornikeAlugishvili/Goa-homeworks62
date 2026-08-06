import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[300px] h-[550px] bg-[#16263d] rounded-[8px] flex items-center flex-col'>
        <img src="./image-equilibrium.jpg" className='w-[280px] h-[280px] 
          pt-[10px] rounded-[8px]' />

        <h1 className='text-[white] text-[20px] pr-[110px]'>Equilibrium #3429</h1>
        <br />
        <p className='text-[gray]'>Our Equilibrium collection promotes <br /> balance and calm.
        </p>
        <br />
        <div className='flex flex-row'>
          <div className='pr-[50px] flex flex-row gap-[10px]'>
            <img src="./icon-ethereum.svg" alt="" />
            <p className='text-[20px] text-[#0bf3f6]'>.04 ETH</p>
          </div>

          <div className='flex flex-row gap-[10px]'>
            <img src="./icon-clock.svg" alt="" />
            <p className='text-[#8bacd9]'>3 Days Left</p>
          </div>
        </div>
        <br />
        <div className='w-[250px] h-[50px] border-t flex flex-row gap-[10px]'>
          <img src="./image-avatar.png" className='pt-[5px]'/>
          <p className='pt-[15px] text-[white]'><span className='text-[#6a7f9b]'>Creation of</span> Jules Wyvern</p>
        </div>
      </div>
    </>
  )
}

export default App
