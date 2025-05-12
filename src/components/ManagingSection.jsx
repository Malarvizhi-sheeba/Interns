import tick from '../assets/images/circle-tick.svg'

function ManagingSection() {
    return (
        <section className="managing-web">
            <div className="managing-grid">
                <div className="managing-content">
                    <h1>Start managing your websites</h1>
                    <p>The first compherensive tool developed for Website Managers. Everything you need in one place for your team.</p>
                    <a href="/"><button><i class="fa-solid fa-arrow-right"></i> Get Started</button></a>
                </div>
                <div className="managing-result">
                    <div className="result-sec">
                        <img src={tick} alt="tik" />
                        <p>Standard: $69 (Life Time Deal)</p>
                    </div>
                    <div className="result-sec">
                        <img src={tick} alt="tik" />
                        <p>Agency: $125 (Life Time Deal)</p>
                    </div>
                    <div className="result-sec">
                        <img src={tick} alt="tik" />
                        <p>Pro: $350 (Life Time Deal)</p>
                        {/* Pro: $350 (Life Time Deal) */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ManagingSection;