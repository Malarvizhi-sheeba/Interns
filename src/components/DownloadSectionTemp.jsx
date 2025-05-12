import downimg from '../assets/images/downloadsec-img.svg'

function DownloadSection() {
    return (
        <section className='download-main'>
            <div className="downmain-grid">
                <div className="download-text">
                    <div className="downloadtxt-main">
                        <h6>Download  <br />
                            <b>Free Chrome Extension</b></h6>
                        <p>Some of the features that make Breeze one of the best website toolkit available today.</p>
                        <div>
                            <a href="/"> <button>Get Started</button></a>
                        </div>

                    </div>


                </div>
                <div className="download-image">
                    <img src={downimg} alt="down-img" />
                </div>
            </div>
        </section>
    );
}

export default DownloadSection;