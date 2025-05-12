import breezeLogo from "../assets/images/breeze-logo.svg"
import chromeImg from "../assets/images/chrome-img.png"

function Footer() {
    return (
        <footer className="final-sec">
            <div className="final">
                <div className="logo-breeze">
                    <a href="/"> <img src={breezeLogo} alt="logo" href="#" /></a>
                </div>

                <hr />

                <div className="features-grid">
                    <div className="features">
                        <h1>Features</h1>
                        <ul>
                            <li>Cookie & Cache</li>
                            <li>Responsive Layout</li>
                            <li>Take Screenshot</li>
                            <li>Live Edit</li>
                            <li>SEO Panel</li>
                            <li>What is?</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div className="environment">

                        <ul>
                            <li>Environment</li>
                            <li>Browser Support</li>
                            <li>Tech Stack</li>
                            <li>Screenshot Audit</li>
                            <li>Team Sharing</li>
                            <li>Page Manager</li>
                            <li>Checklist</li>
                        </ul>
                    </div>


                    <div className="company">
                        <h1>Company</h1>
                        <ul>
                            <li>Contact Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className="rating">
                        <div className="chrome-img">
                            <img src={chromeImg} alt="chrome-img" />
                        </div>
                        <div className='chrome-content'>
                            <h2>Check out our 9 reviews</h2>
                            <span className='bg-green'>★</span>
                            <span className='bg-green'>★</span>
                            <span className='bg-green'>★</span>
                            <span className='bg-green'>★</span>
                            <span className='bg-white'>★</span>
                        </div>
                    </div>
                </div>

                <hr />
                <div className='company-details'>
                    <div className="company-address">
                        <h6 className='company-link'>© SCube.co</h6>
                        <p>SCube.co & SCube Theme is trading name for SCube <br /> Digital Limited.</p>
                        <p>SCube is Trademarked with UK Government.</p>
                    </div>
                    <div className="company-policy">
                        <ul>
                            <li>Terms & Policies</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;