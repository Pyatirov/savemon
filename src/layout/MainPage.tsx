import { Outlet } from "react-router"
import Header from "../component/Header"
import "../css/mainPage.css"

export default function MainPage(){
    return(
        <>
            <Header />
            <div className="mainTitle">ГЛАВНОЕ</div>
            <div className="mainWrapper">
                <Outlet />
            </div>
        </>
    )
}