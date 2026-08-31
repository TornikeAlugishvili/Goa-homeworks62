import { Routes, Route } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import AddPrdouct from "./components/AddProduct"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/loginform" element={<LoginForm/>}/>
                <Route path="/addproduct" element={<AddPrdouct/>}></Route>
            </Routes>
        </>
    )
}

export default App