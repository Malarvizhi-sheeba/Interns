import breezelogo from '../assets/images/breeze-logo.svg'
import { Link } from "react-router-dom";
// import '../styles/Navbar.css'


function Navbar() {
    return (
        <div>
            <nav className="nav-bar">
                <div className="header-flex">
                    <div className="header-logo">
                        <a href="/"><img src={breezelogo} alt="logo" /></a>
                        <div class="header-menu">
                            <ul>
                                <li><Link>Product <i class="fa-solid fa-chevron-down"></i> </Link></li>
                                <li><Link>Resources <i class="fa-solid fa-chevron-down"></i></Link> </li>
                                <li><Link>Contact Us</Link> </li>
                                <li><Link>Download</Link></li>
                                <li><Link to="/Pricing">Pricing</Link></li>
                            </ul>

                        </div>
                    </div>
                    <div className="header-button">
                        <a href="/"><button>Login</button></a>
                        <a href="/"><button class="create-acc" >Create Account</button></a>
                    </div>
                    <div class="nav-menu">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
