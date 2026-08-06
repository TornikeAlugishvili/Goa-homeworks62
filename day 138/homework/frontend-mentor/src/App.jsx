import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <header className='bg-[#fff] w-[100%] h-[100px] flex justify-around '>
        <img src="./logo-dark.svg" className='w-[200px]' />
        <div className='flex flex-row gap-[20px] pt-[35px]'>
          <p className='text-[gray] cursor-pointer'>Home</p>
          <p className='text-[gray] cursor-pointer'>About</p>
          <p className='text-[gray] cursor-pointer'>Contact</p>
          <p className='text-[gray] cursor-pointer'>Blog</p>
          <p className='text-[gray] cursor-pointer'>Careers</p>

        </div>
        <br />
        <button className='text-[white] bg-[#30cb7c] h-[40px] w-[160px] mt-[35px] rounded-[8px] cursor-pointer'>Request Invite</button>
      </header>

      <main className='bg-[#fafafa] flex-col'>
        <div className='flex'>
          <div className='w-[50%] h-[630px] p-[105px] '>
            <h1 className='text-[60px]'>Next generation <br />digital banking</h1>
            <br />
            <p className='text-[gray]'>Take your financial lite online. Your D'8'tatbank <br />
              account will be a one-stop-shop for spending, saving, <br />
              budgeting, investing, and much more.
            </p>
            <button className='text-[white] bg-[#30cb7c] h-[40px] w-[160px] mt-[35px] rounded-[8px] cursor-pointer'>Request Invite</button>
          </div>

          <div className='w-[50%] h-[630px] bg-[url(./bg-intro-desktop.svg)] '>
            <img src="./image-mockups.png" className='absolute top-[-100px]' />
          </div>
        </div>

      </main>
      <div className='bg-[#f4f5f7] h-[600px] w-[100%]'>
        <h1 className='text-[40px] p-[55px]'>Why Choose Digitalbank?</h1>
        <p className='text-[gray] pl-[55px]'>We leverage Open Banking to turn your bank account into your financial hub. <br />
          Control your finances like never before.
        </p>
        <br />
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <img src="./icon-online.svg" className='w-[100px]' />
            <br />
            <h1>Online Banking</h1>
            <br />
            <p className='text-[gray]'>
              Our modern web and mobile <br />
              applications allow you to keep <br />
              track of your finances wherever <br />
              you are in the world.
            </p>
          </div>
          <div className='flex flex-col'>
            <img src="./icon-budgeting.svg" className='w-[100px]' />
            <br />
            <h1>Simple Budgeting</h1>
            <br />
            <p className='text-[gray]'>
              See exactly where your money <br />
              goes each month. Receive <br />
              notifications when you're close to <br />
              hitting your limits.
            </p>
          </div><div className='flex flex-col'>
            <img src="./icon-onboarding.svg" className='w-[100px]' />
            <br />
            <h1>Fast onboarding</h1>
            <br />
            <p className='text-[gray]'>
              We don't do branches. Open your <br />
              account in minutes online and start <br />
              taking control of your finances <br />
              right away.
            </p>
          </div><div className='flex flex-col'>
            <img src="./icon-apia.svg" className='w-[100px]' />
            <br />
            <h1>Open API</h1>
            <br />
            <p className='text-[gray]'>
              Manage your savings. investments, <br />
              pension. and much more from one <br />
              account, Tracking your money has <br />
              never been easier.
            </p>
          </div>

        </div>
      </div>
      <div className='bg-[#fafafa] h-[700px] w-[100%] flex-col'>
        <h1 className='p-[35px] text-[40px]'>Latest Articles</h1>
        <div className='flex justify-around'>
          <div className='h-[480px] w-[350px] bg-[#ffffff]'>
            <img src="./image-currency.jpg" alt="" />
            <p className='text-[gray] p-[15px]'>By Claire Robnson</p>
            <p className='text-[20px] text-center'>Receive money in any <br />
              currency with no fees
            </p>
            <br />
            <p className='text-[gray] text-center text-[10px]'>The world is getting smaller and <br />
              we're becoming more mobile, So <br />
              why should you be forced to only <br />
              receive money in a single</p>
          </div>
          <div className='h-[480px] w-[350px] bg-[#ffffff]'>
            <img src="./image-restaurant.jpg" alt="" />
            <p className='text-[gray] p-[15px]'>By Claire Robnson</p>
            <p className='text-[20px] text-center'>Treat yourself without <br />
              worrying about money
            </p>
            <br />
            <p className='text-[gray] text-center text-[10px]'>The world is getting smaller and <br />
              Our Simple budgeting feature <br />
              allows you to separate out your <br />
              spending and set realistic limits <br />
              each month. That means you .
            </p>
          </div>
          <div className='h-[480px] w-[350px] bg-[#ffffff]'>
            <img src="./image-plane.jpg" alt="" />
            <p className='text-[gray] p-[15px]'>By Claire Robnson</p>
            <p className='text-[20px] text-center'>Take your Digitalbank card <br />
              wherever you go
            </p>
            <br />
            <p className='text-[gray] text-center text-[10px]'>The world is getting smaller and <br />
              We want you to enjoy your <br />
              travels. Th•s is why we don't <br />
              charge any fees on purchases <br />
              while you're abroad. We'll even
            </p>
          </div>
          <div className='h-[480px] w-[350px] bg-[#ffffff]'>
            <img src="./image-confetti.jpg" alt="" />
            <p className='text-[gray] p-[15px]'>By Claire Robnson</p>
            <p className='text-[20px] text-center'>Our invite-only Beta accounts <br />
              are now live!
            </p>
            <br />
            <p className='text-[gray] text-center text-[10px]'>The world is getting smaller and <br />
              After a lot of hard work by the <br />
              whole team. we're excited to <br />
              launch our closed beta. It •s easy <br />
              to request an Invite through
            </p>
          </div>
        </div>
      </div>

      <footer className='bg-[#2d314e] h-[150px] w-[100%] bg-[url(./image.png)] bg-no-repeat'>

      </footer>
    </>
  )
}

export default App
