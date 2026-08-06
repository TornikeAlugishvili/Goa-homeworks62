import { useState } from 'react'

function App() {

  const [div1, newDiv1] = useState([])
  const [div2, newDiv2] = useState([])
  const [winner, setWinner] = useState("")

  const [count, setCount] = useState(0)
  const [count1, setCount2] = useState(0)

  function start() {
    let random1 = Math.floor(Math.random()*7)
    let random2 = Math.floor(Math.random()*7)
    let Div1 = []
    let Div2 = []


    for (let i = 0; i < random1; i++ ) {
      Div1.push(<div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'>
      </div>
      )

      console.log(random1)
    }
    
    for (let i = 0; i < random2; i++ ) {
      Div2.push(<div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'>
      </div>)
    } 


    newDiv1(Div1)
    newDiv2(Div2)

    Div1 = []
    Div2 = []


    if (random1 > random2) {
      setWinner("Player 1 Win")
      setCount(count+1)
    }
    if (random2 > random1) {
      setWinner("Player 2 Win")
      setCount2(count1+1)
    }

    if (random1 == random2) {
      setWinner("Draw")
    }
  }

  

  return (
    <>
      <div className='w-[100%] h-[100%] bg-[#000000] z-[-10] absolute opacity-[0.5]'>
      </div>
      <br />
      <div className='flex justify-center gap-[60px] text-[red] text-[30px] font-[500]'>
        <h1>PLAYER 1 SCORES <span>{count}</span></h1>
        <h1>PLAYER 2 SCORES <span>{count1}</span></h1>
      </div>
      <br /><br />
      <h1 className='text-[red] text-center text-[30px] font-[500]'>{winner}</h1>
      <br /><br /><br /><br />
      <div className='flex justify-center items-center gap-[50px] flex'>
        <div className='w-[300px] h-[300px] bg-[red] rounded-[18px] grid grid-rows-3 grid-cols-[repeat(2,80px)] place-content-center place-items-center'>
          {/* <div className='flex flex-col gap-[10px] justify-center pl-[15px]'>
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
          </div> */}
          {div1.map((item) => {
            return item
          })}
          {/* <div className='flex flex-col gap-[10px] justify-center pl-[25px]'>
            
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
          </div> */}
          {/* <div className='flex flex-col gap-[10px] justify-center pl-[25px]'>
            
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
            <div className='w-[70px] h-[70px] rounded-[50%] bg-[white]'></div>
          </div> */}

        </div>
        <div className='w-[300px] h-[300px] bg-[red] rounded-[18px] grid grid-rows-3 grid-cols-[repeat(2,80px)] place-content-center place-items-center'>
          {div2.map((item) => {
            return item
          })}
        </div>
      </div>
      <br /><br />
      <div className='flex justify-center'>
        <button className='bg-[red] text-[white] w-[200px] h-[50px] text-[20px] rounded-[8px]' onClick={start}>Start</button>
      </div>
    </>
  )
}

export default App
