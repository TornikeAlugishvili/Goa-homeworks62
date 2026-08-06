function App() {
  return (
    <>
      <div className="w-[450px] h-[500px] flex max-[950px]: flex-col flex max-[950px]:w-[300px] flex ">
        <div className="w-[100%] h-[100%] flex flex-col bg-[#e28525] p-[35px_0_0_25px]  
        rounded-[10px_0_0_10px] flex max-[950px]: rounded-[10px_10px_0_0]">
          <img src="./icon-sedans.svg" className="w-[80px]" />
          <br />
          <h1 className="text-[30px] text-[white] font-[700]">
            SEDANS
          </h1>

          <br />

          <p className="text-[#ffc57e]">
            Choose a sedan for its <br />
            affordability and excellent <br />
            fuel economy. Ideal for <br />
            cruising in the city or on <br />
            your next road trip.
          </p>

          <br />
          <br /><br />
          <br /><br />
          <button className="w-[130px] bg-[white] text-[#ba976c] h-[50px] rounded-[12px]">Learn More</button>
        </div>


        <div className="w-[100%] h-[100%] flex flex-col bg-[#016972] p-[35px_0_0_25px]  
        ">
          <img src="./icon-suvs.svg" className="w-[80px]" />
          <br />
          <h1 className="text-[30px] text-[white] font-[700]">
            SUVS
          </h1>

          <br />

          <p className="text-[#8cd8e2]">
            Take an SUV for its spacious <br />
            interior, power, and <br />
            versatility. Perfect for your <br />
            next family vacation and <br />
            off-road adventures.
          </p>

          <br />
          <br /><br />
          <br /><br />
          <button className="w-[130px] bg-[white] text-[#50747a] h-[50px] rounded-[12px]">Learn More</button>
        </div>
        <div className="w-[100%] h-[100%] flex flex-col bg-[#00403f] p-[35px_0_0_25px] rounded-[0_10px_10px_0]  flex max-[950px]: rounded-[0_10px_10px_0] 
        ">
          <img src="./icon-luxury.svg" className="w-[80px]" />
          <br />
          <h1 className="text-[30px] text-[white] font-[700]">
            LUXURY
          </h1>

          <br />

          <p className="text-[#8cd8e2]">
            Cruise in the best car brands <br />
            without the bloated prices. <br />
            Enjoy the enhanced comfort <br />
            of a luxury rental and arrive <br />
            in style.
          </p>

          <br />
          <br /><br />
          <br /><br />
          <button className="w-[130px] bg-[white] text-[#516b69] h-[50px] rounded-[12px]">Learn More</button>
        </div>
      </div>
    </>
  )
}

export default App