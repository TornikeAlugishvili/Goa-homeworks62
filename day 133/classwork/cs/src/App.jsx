import './App.css'

function App() {
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-80 h-140 bg-white flex justify-center items-center flex-col gap-10 rounded-md'>
          <img src="image.png" alt="" width={250} height={10} className=' rounded-md' />

          <h1 className='text-black font-bold'>Improve your front-end <br />
            skills by building projects</h1>

          <p className='text-grey-100 text-center'>Scan the QR code to visit Frontend
            Mentor and take your coding skills to
            the next level</p>
        </div>
      </div>

    </>
  )
}

export default App
