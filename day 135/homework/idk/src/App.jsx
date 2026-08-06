function App() {

  return (
    <>
      <div className="h-[570px] w-[80%] grid grid-rows-2 grid-cols-4 gap-[20px]">
        <div className="row-span-2 bg-[#1d204b] rounded-[8px]">
          <div className="h-[70%] w-[100%] bg-[#5746ea] rounded-[8px] pl-[10px] pt-[15px]">

            <img src="./image-jeremy.png" className="h-[30%] border-[2px]  border-white rounded-[50%]" />
            <br /><br />
            <p className="text-[#aaa1ff] pl-[15px]">Report for</p>
            <h1 className="text-[40px] text-[white] pl-[15px]">Jeremy <br /> Robson</h1>
          </div>

          <div className="flex flex-col pl-[15px] pt-[15px]">
            <p className="text-[#6869a1]">Daily</p>
            <br />
            <p className="text-[white]">Weekly</p>
            <br />
            <p className="text-[#6869a1]">Monthly</p>
          </div>

        </div>

        <div className="bg-[#ff8b64] rounded-[8px] bg-[url('./icon-work.svg')] bg-no-repeat bg-position-[right_0]">


          <div className="bg-[#1d204b] rounded-[8px] h-[75%] relative top-[25%]">
            <br />
            <div className="flex justify-around pl-[15px]">
              <p className="text-[white]">Work</p>
              <div className="pt-[10px] flex flex-col">
                <img src="./icon-ellipsis.svg" className="w-[40px] h-[10px]" />
                <br />
              </div>
            </div>
            <h1 className="pl-[50px] text-[40px] text-[white]">32hrs</h1>

            <p className="text-[gray] pl-[40px]">Last week - 36hrs</p>
          </div>
        </div>
        <div className="bg-[#54c3e6] rounded-[8px] bg-[url('./icon-play.svg')] bg-no-repeat bg-position-[right_0]">


          <div className="bg-[#1d204b] rounded-[8px] h-[75%] relative top-[25%]">
            <br />
            <div className="flex justify-around pl-[15px]">
              <p className="text-[white]">Play</p>
              <div className="pt-[10px] flex flex-col">
                <img src="./icon-ellipsis.svg" className="w-[40px] h-[10px]" />
                <br />
              </div>
            </div>
            <h1 className="pl-[50px] text-[40px] text-[white]">10hrs</h1>

            <p className="text-[gray] pl-[40px]">Last week - 8hrs</p>
          </div>
        </div>
        <div className="bg-[#ff5e7d] rounded-[8px] bg-[url('./icon-study.svg')] bg-no-repeat bg-position-[right_0]">


          <div className="bg-[#1d204b] rounded-[8px] h-[75%] relative top-[25%]">
            <br />
            <div className="flex justify-around pl-[15px]">
              <p className="text-[white]">Study</p>
              <div className="pt-[10px] flex flex-col">
                <img src="./icon-ellipsis.svg" className="w-[40px] h-[10px]" />
                <br />
              </div>
            </div>
            <h1 className="pl-[50px] text-[40px] text-[white]">4hrs</h1>

            <p className="text-[gray] pl-[40px]">Last week - 7hrs</p>
          </div>
        </div>
        <div className="bg-[#4bcf83] rounded-[8px] bg-[url('./icon-exercise.svg')] bg-no-repeat bg-position-[right_0]">


          <div className="bg-[#1d204b] rounded-[8px] h-[75%] relative top-[25%]">
            <br />
            <div className="flex justify-around pl-[15px]">
              <p className="text-[white]">Exercise</p>
              <div className="pt-[10px] flex flex-col">
                <img src="./icon-ellipsis.svg" className="w-[40px] h-[10px]" />
                <br />
              </div>
            </div>
            <h1 className="pl-[50px] text-[40px] text-[white]">4hrs</h1>

            <p className="text-[gray] pl-[40px]">Last week - 5hrs</p>
          </div>
        </div>
        <div className="bg-[#7235d1] rounded-[8px] bg-[url('./icon-social.svg')] bg-no-repeat bg-position-[right_0]">


          <div className="bg-[#1d204b] rounded-[8px] h-[75%] relative top-[25%]">
            <br />
            <div className="flex justify-around pl-[15px]">
              <p className="text-[white]">Social</p>
              <div className="pt-[10px] flex flex-col">
                <img src="./icon-ellipsis.svg" className="w-[40px] h-[10px]" />
                <br />
              </div>
            </div>
            <h1 className="pl-[50px] text-[40px] text-[white]">5hrs</h1>

            <p className="text-[gray] pl-[40px]">Last week - 10hrs</p>
          </div>
        </div>
        <div className="bg-[#f1c65b] rounded-[8px] bg-[url('./icon-self-care.svg')] bg-no-repeat bg-position-[right_0]">


          <div className="bg-[#1d204b] rounded-[8px] h-[75%] relative top-[25%]">
            <br />
            <div className="flex justify-around pl-[15px]">
              <p className="text-[white]">Self Care</p>
              <div className="pt-[10px] flex flex-col">
                <img src="./icon-ellipsis.svg" className="w-[40px] h-[10px]" />
                <br />
              </div>
            </div>
            <h1 className="pl-[50px] text-[40px] text-[white]">2hrs</h1>
            <p className="text-[gray] pl-[40px]">Last week - 2hrs</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App