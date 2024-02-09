import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                <Route path='signup' element={<SignUpPage/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router