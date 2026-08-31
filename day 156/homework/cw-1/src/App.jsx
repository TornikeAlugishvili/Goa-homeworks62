import { Routes, Route } from "react-router-dom"
import { useParams } from "react-router-dom"
import UseParams from "./components/UseParams"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/useparams/:book_id" element={<UseParams />} />
      </Routes>
    </>
  )
}

export default App