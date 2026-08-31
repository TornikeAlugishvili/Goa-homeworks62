import { useRef } from "react"

function App() {
  const inp = useRef(null)

  return (
    <>
      <input ref={inp} type="text" />
      <br />
      <button onClick={() => (inp.current.style.color = "red")}>red</button>
      <br />
      <button onClick={() => (inp.current.style.color = "blue")}>blue</button>
      <br />
      <button onClick={() => (inp.current.style.color = "black")}>black</button>
    </>
  )
}

export default App