import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {

  return (
    <>
      <div className='w-[600px] h-[400px] flex'>
        <div className='w-[50%] h-[100%] bg-[url("/image-product-desktop.jpg")] object-fit'></div>
        <div className='w-50%'></div>
      </div>
    </>
  )
}

export default App
