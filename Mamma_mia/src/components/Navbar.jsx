import '../Navbar.css'

const Navbar = () => {
    const total = 25000;
    const token = false;

    if(token == false){
    return (
        <nav className='navegador navbar navbar-expand-lg'>
            <div className='container conjunto'>
                <h2 className='navbar-brand  mb-0 h1'>Pizzería Mammá Mia</h2> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='lista navbar-nav'>
                    <div className='lista1 navbar-nav'>
                        <li className="item nav-item"><button>🍕 Home</button></li>
                        <li className="item nav-item"><button>🔓 login</button></li>
                        <li className="item nav-item"><button>🔐 Register</button></li>
                    </div>
                    <div className='lista2 navbar-nav'>
                        <li className="item nav-item"><button>Total:$ {total.toLocaleString()} </button></li>
                    </div>
                </ul>
            </div>
        </nav>
        
    )
    } else if (token == true){
        return (
        <nav className='navegador navbar navbar-expand-lg'>
            <div className='container'>
                <h2 className='navbar-brand  mb-0 h1'>Pizzería Mammá Mia</h2> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='lista navbar-nav'>
                    <div className='lista1 navbar-nav'>
                        <li className="item nav-item"><button>🍕 Home</button></li>
                        <li className="item"><button>👤 Profile</button></li>
                        <li className="item"><button>🔒 Logout</button></li>
                    </div>
                    <div className='lista2 navbar-nav'>
                        <li className="item nav-item"><button>Total:$ {total.toLocaleString()} </button></li>
                    </div>
                </ul>
            </div>
        </nav>            
        )
    }
}

export default Navbar