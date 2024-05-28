import { Header } from "@/widgets/header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout