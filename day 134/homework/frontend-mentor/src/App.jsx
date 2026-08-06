import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  return (
    <>
      <div className='w-[350px] h-[650px] bg-[#1f1f1f] flex flex-col items-center pt-[20px]
      rounded-[12px]
      '>
        <img className='rounded-full w-[100px]' src="/avatar-jessica.jpeg"/>
        <br />
        <h1 className='text-white text-[25px]'>Jessica Randall</h1>

        <p className='text-[#b4d03e]'>London, United Kingdom</p>

        <br />

        <p className='text-[#f1f1f1]'>"Front-end developer and avid reader."</p>

        <br />
        <button className='w-[250px] text-white bg-[#333333] rounded-[10px] h-[50px]'>GitHub</button>

        <br />
        <button className='w-[250px] text-white bg-[#333333] rounded-[10px] h-[50px]
        '>Frontend Mentor</button>

        <br />
        <button className='w-[250px] text-white bg-[#333333] rounded-[10px] h-[50px]'>Linkedln</button>

        <br />
        <button className='w-[250px] text-white bg-[#333333] rounded-[10px] h-[50px]'>Twitter</button>

        <br />
        <button className='w-[250px] text-white bg-[#333333] rounded-[10px] h-[50px]'>Instagram</button>
      </div>
    </>
  )
}

export default App
