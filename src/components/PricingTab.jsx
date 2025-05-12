import React, { useState } from 'react';

function PricingTab() {
    const [activeTab, setActiveTab] = useState('lifetime');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className='pricingtab-section'>
            <div className="tabs">
                <div className="tabs-btn">
                    <div
                        className={`tab-button ${activeTab === 'lifetime' ? 'active' : ''}`}
                        onClick={() => handleTabClick('lifetime')}
                    >
                        <div className="save-offer">save 90%</div>
                        Life Time
                    </div>
                    <div
                        className={`tab-button ${activeTab === 'monthly' ? 'active' : ''}`}
                        onClick={() => handleTabClick('monthly')}
                    >
                        Monthly
                    </div>
                    <div
                        className={`tab-button ${activeTab === 'annual' ? 'active' : ''}`}
                        onClick={() => handleTabClick('annual')}
                    >
                        <div className="save-offer-second">save 20%</div>
                        Annual
                    </div>
                </div>
            </div>

            <div className="tab-content">
                {activeTab === 'lifetime' && (
                    <div className="pricing-cards">
                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Standard</h3>
                                <div className="price">$69</div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 25 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 5 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 10 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 20 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Agency</h3>
                                <div className="price">$125</div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 625 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 25 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 20 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Pro</h3>
                                <div className="price">$350</div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 5000 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 100 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'monthly' && (
                    <div className="pricing-cards">
                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Standard</h3>
                                <div className="price">
                                    $39/pm
                                    <p className="original-price">$59/pm</p>
                                </div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 25 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 5 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 10 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 20 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Agency</h3>
                                <div className="price">
                                    $119/pm
                                    <p className="original-price">$139/pm</p>
                                </div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 625 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 25 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 20 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Pro</h3>
                                <div className="price">
                                    $229/pm
                                    <p className="original-price">$269/pm</p>
                                </div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 5000 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 100 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'annual' && (
                    <div className="pricing-cards">
                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Standard</h3>
                                <div className="price">
                                    $468/py
                                    <p className="original-price">$588/py</p>
                                </div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 25 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 5 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 10 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 20 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Agency</h3>
                                <div className="price">
                                    $1152/py
                                    <p className="original-price">$1440/py</p>
                                </div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 625 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 25 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 20 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-card">
                            <div className="pricing-card-length">
                                <h3 className="plan-name">Pro</h3>
                                <div className="price">
                                    $2189/py
                                    <p className="original-price">$2736/py</p>
                                </div>
                                <ul className="features">
                                    <li><i className="fa-solid fa-check"></i> 5000 Websites</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Workspaces</li>
                                    <li><i className="fa-solid fa-check"></i> 50 Invite member per workspace</li>
                                    <li><i className="fa-solid fa-check"></i> 100 Screenshots</li>
                                </ul>
                                <div className="buybtn-main">
                                    <a className="buy-button" href="/">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default PricingTab;