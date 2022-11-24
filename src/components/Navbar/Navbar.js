import logo from "../assets/logov1.png";
import "./Navbar.css";
import { FaCartPlus, FaBars, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="container">
                <div>
                    <img src={logo} alt="" className="logo"/>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="">New Releases</a>
                            </li>
                            <li>
                                <a href="">Menu</a>
                            </li>
                            <li>
                                <a href="">Men</a>
                            </li>
                            <li>
                                <a href="">Women</a>
                            </li>
                            <li>
                                <a href="">Kids</a>
                            </li>
                        </ul>
                        <form>
                            <div className="search-icon">
                                <FaSearch/>
                            </div>
                            <input
                                type="text"
                                className="search"
                                placeholder="Search..."
                            />
                            <button className="nav-btn">
                                <FaCartPlus/>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="menu-btn">
                   <FaBars/>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar