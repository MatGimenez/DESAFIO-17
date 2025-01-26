import '../Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const total = 25000;
    const token = true;

    return (
        <nav className='navegador navbar navbar-expand-lg'>
            <div className='container conjunto'>
                <h2 className='navbar-brand'>Pizzería Mammá Mia</h2> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='lista navbar-nav'>
                    <div className='lista1 navbar-nav'>
                        <li className="item nav-item"><Link to="/"><button>🍕 Home</button></Link></li>
                        <li className="item nav-item">
                            {token == false ? <Link to="/Login"><button>🔓 Login</button></Link> : <Link to="/Profile"><button>👤 Profile</button></Link>}
                            {/* <Link to="/Login"><button>{token == false ? "🔓 Login" :"👤 Profile" }</button></Link> */}
                        </li>
                        <li className="item nav-item">
                            {token == false ? <Link to="/Register"><button>🔐 Register</button></Link> : <Link to="/"><button>🔒 Logout</button></Link>}
                            {/* <Link to="/Register"><button>{token == false ?  "🔐 Register": "🔒 Logout" }</button></Link> */}
                            
                        </li>
                        {/* <li className="item nav-item"><Link to="/Cart"><button>🍕 Cart</button></Link></li> */}
                        {/* <li className="item nav-item"><Link to="/Profile"><button>🍕 Profile</button></Link></li> */}
                        <li className="item nav-item">{/* <Link to="/"> */}<button>🍕 Pizza</button>{/* </Link> */}</li>
                    </div>
                    <div className='lista2 navbar-nav'>
                        <li className="item nav-item compra-total"><Link to="/Cart"><button>🛒 Total:$ {total.toLocaleString("es-CL")}</button></Link></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar