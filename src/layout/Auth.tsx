import { Outlet } from "react-router"

export default function Auth(){
    return(
        <>
            <div className="authWrapper">
                <Outlet />
            </div>
        </>
    )
}