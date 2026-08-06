import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[80%] h-[440px] flex max-[1285px]:flex-col-reverse max-[1285px]:h-[700px] max-[1285px]:w-[700px]'>
        <div className='w-[50%] h-[100%] bg-[#1c1938] rounded-[10px_0_0_10px] flex flex-col justify-center p-[40px_60px_40px_40px] gap-[20px] max-[1285px]:rounded-[0_0_10px_10px] '>
          <h1 className='text-[45px] font-[700] text-[#fbfdfc] max-[1285px]:text-[20px] '>
            Get <span className='text-[#ad5cdc]'>insights</span> that help <br />
            your business grow.
          </h1>

          <p className='p-[0_0_40px_0] text-[#8a88a0]'>
            Discover the benefits ot data analytics and make <br />
            better decisions regarding revenue, customer <br />
            experience, and overall efficiency.
          </p>

          <div className='flex justify-between'>
            <div>
              <h1 className='text-[30px] text-[white] font-[700]'>10k</h1>
              <p className='text-[grey]'>Companies</p>
            </div>
            <div>
              <h1 className='text-[30px] text-[white] font-[700]'>10k</h1>
              <p className='text-[grey]'>Companies</p>
            </div>
            <div>
              <h1 className='text-[30px] text-[white] font-[700]'>10k</h1>
              <p className='text-[grey]'>Companies</p>
            </div>
          </div>
        </div>

        <div className='w-[50%] h-[100%] bg-[url(./image.png)] rounded-[0_10px_10px_0] bg-no-repeat bg-size-[100%_100%] max-[1285px]:rounded-[10px_10px_0_0]'>

        </div>
      </div>
    </>
  )
}

export default App
