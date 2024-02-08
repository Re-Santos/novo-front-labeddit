import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router