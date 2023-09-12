import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="navbar flex">
            <div className=" nav-head text-lg">Rudra</div>
                <Link className="nav-item mx-8" to='/dashboard'>Home</Link>
                <Link className="nav-item mx-8" to='/battalions'>Battalions</Link>
                <Link className="nav-item mx-8" to='/map'>Map</Link>
        </div>
    )
    }