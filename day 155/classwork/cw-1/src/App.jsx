function App() {
  return (
    <>
      <div className="w-[100%] h-[150vh] bg-[#fcf6f1] pl-[15px] flex">
        <div className="w-[20%]">
          <div className="flex gap-[20px] pt-[15px] border-b w-[200px]">
            <img src="illustration-sun.svg" className="w-[90px] pl-[15px]" />
            <p className="text-[20px]"><span className="text-[#9a5d4e]">Maison</span> <br /> Soleil</p>
          </div>
          <br />
          <div className="flex gap-[20px]">
            <div className="flex flex-col">
              <img src="icon-bed.svg" className="w-[40px]" /><br />
              <img src="icon-house.svg" className="w-[40px]" /><br />
              <img src="icon-pin.svg" className="w-[40px]" /><br />
              <img src="icon-breakfast-outline.svg" className="w-[40px]" /><br />
              <img src="icon-mail.svg" className="w-[40px]" />
            </div>

            <div className="flex flex-col">
              <p className="text-[40px]">Your stay</p>
              <p className="text-[40px]">The house</p>
              <p className="text-[40px]">Around town</p>
              <p className="text-[40px]">Breakfast</p>
              <p className="text-[40px]">Messages</p>
            </div>
          </div>

          <br /><br /><br /><br />
          <img src="image.png" />
          <img src="image copy.png" />
        </div>

        <div className=" w-[70%] border-l">
          <div className="flex flex-col p-[15px]">
            <p className="text-[15px] text-[#c5bfb5]">BOOKING • CONFIRMED</p>
            <div className="flex gap-[350px]">
              <p className="text-[50px]">Bienvenue,<span className="text-[#aa583b]"> Lucia.</span></p>

              <div className="flex gap-[20px]">
                <button className="w-[140px] border h-[50px] rounded-[30px]">Print receipt</button>
                <button className="w-[140px] border h-[50px] rounded-[30px] bg-[black] text-[white]">Add to calendar</button>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="flex justify-center flex-col">
            <div className="flex justify-center">
              <div className="w-[340px] h-[400px] origin-bottom -rotate-6">
                <img src="imagecopy2.png" className="w-[100%] h-[100%] rounded-[30px]" />
              </div>
              <div className="w-[340px] h-[400px] origin-bottom rotate-4 bg-[#a4421f] rounded-[30px] relative right-[50px]">
                <div className="flex gap-[130px]">
                  <p className="text-[white] p-[15px]">WELCOME CARD</p>
                  <img src="icon-sun.svg" alt="" />
                </div>

                <p className="text-[#eba86b] p-[15px] text-[20px]">A note from your host,</p>
                <p className="text-[40px] pl-[15px] text-[white]">Margaux</p>
                <p className="text-[white] pl-[15px]">We're so glad you're coming, The shutters wil be open.
                  the lemonade coki and the cat - Porvre - pretending
                  not to notice
                </p>
                <br /><br />
                <p className="text-[gray] p-[15px]">R O O M</p>
                <p className="text-[white] pl-[15px]">La Garrigue</p>
              </div>
            </div>

            <br />
            <div className="flex gap-[20px] pl-[15px] bg-[#fcf6f1]">
              <div className="border w-[200px] h-[150px] flex">
                <div>
                  <div className="w-[100px] rounded-[50%] bg-[#b7421d]"></div>
                </div>
                <div></div>
              </div>
              <div className="border w-[200px] h-[150px] flex">
                <div></div>
                <div></div>
              </div>
              <div className="border w-[200px] h-[150px] flex">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
