import bannervideo from '../assets/videos/env.mp4';

function Banner() {
    return (
        <section className="banner-grid">
            <div className="banner-content">
                <h2><b>Store and switch environments</b> from a single space.</h2>
                <p>Save multiple website environments on the cloud, share it with the website development & marketing team and access it with Breeze Chrome Extension. Differentiate the environments with colour codes</p>

                <a href="/"> <button class="get-btn"><i class="fa-solid fa-arrow-right"></i> Get A Free Workspace</button></a>
                <a href="/">  <button class="explore-btn"><i class="fa-solid fa-bag-shopping"></i> Explore Breeze</button></a>

            </div>
            <div className="banner-video">
                <div className="banner-vd-description">
                    <div className="banner-vd">
                        <video autoPlay muted loop>
                            <source src={bannervideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="banner-description">
                        <p>Breeze lets you store multiple environments in one place. It also acts as a  domain switcher tool                              </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
