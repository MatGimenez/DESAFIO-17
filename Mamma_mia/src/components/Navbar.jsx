import "../Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    /* const total = 25000; */
    const { token, setToken, logout, profile} = useContext(UserContext);
    /* const token  = true; */

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "not-active");

    /* const validarToken = () => {
        (setToken ? setToken(false) : setToken(true));
    } */


    return (
        <nav className="navegador navbar navbar-expand-lg">
            <div className="container conjunto">
                <h2 className="navbar-brand">Pizzería Mamma Mia</h2>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="lista navbar-nav">
                    <div className="lista1 navbar-nav">
                        <li className="item nav-item">
                            <NavLink className={setActiveClass} to="/">
                                <button>🏠 Home</button>
                            </NavLink>
                        </li>
                        {token ? (
                            <>
                                <li>
                                    <NavLink className={setActiveClass} to="/Profile">
                                        <button>👤 Profile</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={setActiveClass}>
                                        <button onClick={ logout }>🔒 Logout</button>
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink className={setActiveClass} to="/LoginPage">
                                        <button>🔓 Login</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={setActiveClass} to="/RegisterPage">
                                        <button>🔐 Register</button>
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {/* <li className="item nav-item">
                            {Cambiar token de false a true, para revisar botones }
                            {token ? (
                                <NavLink className={setActiveClass} to="/Login">
                                    <button>🔓 Login</button>
                                </NavLink>
                            ) : (
                                <NavLink className={setActiveClass} to="/Profile">
                                    <button>👤 Profile</button>
                                </NavLink>
                            )}
                            {<Link to="/Login"><button>{token == false ? "🔓 Login" :"👤 Profile" }</button></Link>}
                        </li>
                        <li className="item nav-item">
                            {Cambiar token de false a true, para revisar botones }
                            {token == false ? (
                                <NavLink className={setActiveClass} to="/Register">
                                    <button>🔐 Register</button>
                                </NavLink>
                            ) : (
                                <NavLink className={setActiveClass}>
                                    <button onClick={validarToken} onClick={Logout}>🔒 Logout</button>
                                </NavLink>
                            )} }
                            
                            {/* <Link to="/Register"><button>{token == false ?  "🔐 Register": "🔒 Logout" }</button></Link> */}


                        {/* <li className="item nav-item"><Link to="/Cart"><button>🍕 Cart</button></Link></li> */}
                        {/* <li className="item nav-item">
                            <NavLink className={setActiveClass} to="/Profile">
                                <button>👤 Profile</button>
                            </NavLink>
                        </li> */}

                        {/* REFERENCIA 404 */}
                        {/* <li className="item nav-item">
                            <NavLink className={setActiveClass} to="/Pizza">
                                <button>🍕 Pizza</button>
                            </NavLink>
                        </li> */}
                    </div>
                    <div className="lista2 navbar-nav">
                        <li className="item nav-item compra-total">
                            <Link to="/Cart">
                                <button>🛒 Total:$ {cart.reduce((subtotal, currentValue) => subtotal + currentValue.price * currentValue.count, 0).toLocaleString("es-CL")}</button>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
