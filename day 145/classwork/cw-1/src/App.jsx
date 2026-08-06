import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`მიმდინარე რიცხვია: ${count}`)
  }, [count])

  // useEffect(() => {
  //   console.log(`div's color is ${divColor}`)
  // },[divColor])


  return (
    <>
      {/* <div className='w-[300px] h-[300px]' style={
        {
          backgroundColor: divColor
        }
      }></div>

      <button onClick={()=>
        setDivColor("yellow")
      }>yellow</button>
      <button onClick={()=>
        setDivColor("blue")
      }>blue</button>
      <button onClick={()=>
        setDivColor("red")
      }>red</button>
      <button onClick={()=>
        setDivColor("pink")
      }>pink</button>
      <button onClick={()=>
        setDivColor("brown")
      }>brown</button> */}

      <p>{count}</p>

      <button onClick={()=> setCount(count + 1)}>+</button>
      <br />
      <button onClick={()=> setCount(count - 1)}>-</button>
    </>
  )
}

export default App
