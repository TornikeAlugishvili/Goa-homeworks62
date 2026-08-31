import { Route, Routes } from "react-router-dom"
import Cart from "./components/cart"
import MainP from "./components/mainP"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainP/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes >
    </>
  )
}

export default App
