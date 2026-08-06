import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <div className='flex flex-col w-[430px] h-[700px] items-center'>
        <div className='bg-[url("./illustration-hero.svg")] w-[100%] h-[220px] rounded-sm'>

        </div>
        <div className='w-[100%] h-[400px] bg-white rounded-sm flex flex-col'>
          <h1 className='text-center pt-[20px] text-[20px] font-bold'>Order Summary</h1>

          <p className='text-center pt-[10px] text-[20px] text-[gray]'>You can now listen to millions Of songs
            audiobooks. and podcasts on any device
            anywhere you like!
          </p>
          <br />
          <div className="w-[100%] bg-[#f8f9fe] flex justify-between p-[15px] items-center">
            <div className="flex gap-[15px]">
              <img src="./icon-music.svg" alt="" />
              <div>
                <p className="font-[900] text-[hsl(223,47%,23%)]">Annual Plan</p>
                <p className="text-[hsl(224,23%,55%)]">$59.99/year</p>
              </div>
            </div>
            <p className="text-[hsl(245,75%,52%)] underline font-[700]">Change</p>

          </div>
          <br />
          <div className='flex justify-center'>
            <button className='bg-[blue] w-[350px] h-[50px] text-white rounded-[8px]'>Proccesed To Payments</button>
          </div>
          <br />
          <p className='text-center text-[20px] font-bold'>Cancel Offer</p>
        </div>  
      </div>
    </>
  )
}

export default App
