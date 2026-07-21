import { Outlet } from "react-router"
import Navbar from "../component/Navbar"

function Home() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Home

