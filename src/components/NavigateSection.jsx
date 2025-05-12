import navigateTick from "../assets/images/navigate-tick.png"
import navigate from "../assets/images/navigate-img.svg"


function NavigateSection() {
    return (

        <section className="navigate-main">
            <div className="navigate-row">
                <div className="navigate-img">
                    <img src={navigate} alt="navigate" />
                </div>
                <div className="navigate-content">
                    <h1>Navigate, store, and secure your environments in Breeze</h1>
                    <p className="para">Create, Share, Protect all the development environments from a single place</p>

                    {/* navigate-content-tick 1 */}
                    <div className="navigate-content-main">
                        <div className="navigate-content-img">
                            <img src={navigateTick} alt="tik" />
                        </div>
                        <div className="navigate-content-list">
                            <h4>Create environments and share with your team members</h4>
                            <p>Create multiple environments for a particular website, store them in one place and share them with your team members.</p>
                        </div>
                    </div>
                    {/* navigate-content-tick 2 */}
                    <div className="navigate-content-main">
                        <div className="navigate-content-img">
                            <img src={navigateTick} alt="tik" />
                        </div>
                        <div className="navigate-content-list">
                            <h4>Access environment from chrome extension</h4>
                            <p>Choose two or three priority environments and access them from the extension bar.</p>
                        </div>
                    </div>

                    {/* navigate-content-tick 3 */}
                    <div className="navigate-content-main">
                        <div className="navigate-content-img">
                            <img src={navigateTick} alt="tik" />
                        </div>
                        <div className="navigate-content-list">
                            <h4>Remember environment passwords</h4>
                            <p>Add credentials to the environment URLs and be assured of their safety.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavigateSection;