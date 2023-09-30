import { Link } from "react-router-dom"

const Header = () => {
    return <div className="header">
        <Link to='/'>
            <button>Pets</button>
        </Link>
    </div>
}

export default Header;