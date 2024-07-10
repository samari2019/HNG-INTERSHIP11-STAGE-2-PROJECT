import { NavLink } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import "../index.css";

function Navbar() {
    return (
        <>
            <div className="Navbar-container">

                <div className="Logo-container">
                    <h1>Hawvey</h1>
                </div>

                <div className="Links-container">
                    <nav>
                        <NavLink className="NavLink" to="/">Home </NavLink>
                        <NavLink className="NavLink " to="/NewCollection">New Collection </NavLink>
                        <NavLink className="NavLink" >About</NavLink>
                        <NavLink className="NavLink" to="/ NewCollection">Catalog </NavLink>
                        <NavLink className="NavLink" >Contact </NavLink>
                    </nav>

                </div>

                <div className="Search-Cart-container">
                    <NavLink className="NavLink icons" to="/catalog"><FaSearch /> </NavLink>
                    <NavLink className="NavLink icon-large" to="/Cart"><FaShoppingCart /> </NavLink>
                </div>


            </div>

        </>
    )
}

export default Navbar
