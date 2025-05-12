import createImg1 from '../assets/images/create-img1.svg'
import createImg2 from '../assets/images/create-img2.svg'
import createImg3 from '../assets/images/create-img3.svg'
import createImg4 from '../assets/images/create-img4.svg'
import createImg5 from '../assets/images/create-img5.svg'
import createImg6 from '../assets/images/create-img6.svg'



function CreateSection() {
    return (
        <section className="create-web">
            <div className="create-title">
                <h3>Create multiple website environments, colour code, share them, and access them from breeze</h3>
                <p>Breeze lets you store various environments, share them with your team, and access them from the chrome extension.</p>
            </div>

            {/* create card starts */}
            <div className="create-card-grid">

                {/* create card 1 */}
                <div className="create-card">
                    <div className="create-card-content">
                        <img src={createImg1} alt="create-img" class="create-img" />
                        <h3>Create an unlimited number of Environments</h3>
                        <p>You can create multiple number of environment inside your website project in Breeze</p>
                    </div>
                </div>

                {/* create card 2 */}
                <div className="create-card">
                    <div className="create-card-content">
                        <img src={createImg2} alt="create-img" class="create-img" />
                        <h3>Unique colour for each Environment</h3>
                        <p>With colour coordinated you will always know what environment you are looking at</p>
                    </div>
                </div>

                {/* create card 3 */}

                <div className="create-card">
                    <div className="create-card-content">
                        <img src={createImg3} alt="create-img" class="create-img" />
                        <h3>Use with multiple browser</h3>
                        <p>Create the setup once, and you can access the tools in multiple browsers. Home, office or other laptop. Everything securely stored in the cloud</p>
                    </div>
                </div>


                {/* create card 4 */}
                <div className="create-card">
                    <div className="create-card-content">
                        <img src={createImg4} alt="create-img" class="create-img" />
                        <h3>Share it with your team</h3>
                        <p>You can also share the development environment with your team. No fuss, no excel more productivity</p>
                    </div>
                </div>


                {/* create card 5 */}
                <div className="create-card">
                    <div className="create-card-content">
                        <img src={createImg5} alt="create-img" class="create-img" />
                        <h3>Access From Extension Bar</h3>
                        <p>You can select three priority environment to show on the browser bar as quick access</p>
                    </div>
                </div>

                {/* create card 6 */}
                <div className="create-card">
                    <div className="create-card-content">
                        <img src={createImg6} alt="create-img" class="create-img" />
                        <h3>Environment Password</h3>
                        <p>Access popup password for Staging & Dev environment from Breeze environment page. Works for WP Engine security option</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CreateSection;