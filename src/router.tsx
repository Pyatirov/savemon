import { createBrowserRouter } from "react-router"

import MainPage from "./layout/MainPage"
import Actions from "../src/page/Actions"
import ExchangeRate from "../src/page/ExchangeRate"

import Auth from "./layout/Auth"
import Login from "../src/page/Login"

export default createBrowserRouter([
    {
        Component: MainPage,
        children: [
            {
                path: "/",
                Component: Actions
            },
            {
                path: "/exchange",
                Component: ExchangeRate
            }
        ]
    },

    {
        Component: Auth,
        children: [
            {
                path: "/login",
                Component: Login
            }
        ]
    }
])