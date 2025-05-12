import React from 'react';

function PricingTable() {
    return (
        <section className="pricing-table-section">
            <h2>Pricing Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Features</th>
                        <th>Standard</th>
                        <th>Agency</th>
                        <th>Pro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monthly</td>
                        <td>$39</td>
                        <td>$119</td>
                        <td>$229</td>
                    </tr>
                    <tr>
                        <td>Annual (20%)</td>
                        <td>$468</td>
                        <td>$1152</td>
                        <td>$2189</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>25</td>
                        <td>625</td>
                        <td>5000</td>
                    </tr>
                    <tr>
                        <td>Workspace</td>
                        <td>5</td>
                        <td>25</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Screenshot</td>
                        <td>20</td>
                        <td>50</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Member</td>
                        <td>10</td>
                        <td>20</td>
                        <td>50</td>
                    </tr>
                    <tr className="table-header-row">
                        <th>Web App</th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Team Sharing</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Environment</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Techstack</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Pagelist</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Browser Support</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Page Template</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Playbook/Checklist</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Page Audit</td>
                        <td>1</td>
                        <td>20</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Screenshot Audit</td>
                        <td>20</td>
                        <td>50</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Page Owner</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Website Team Member</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Visual Sitemap</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Key Dates</td>
                        <td>No</td>
                        <td>No</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Useful Links</td>
                        <td>No</td>
                        <td>No</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Historic Techstack</td>
                        <td>No</td>
                        <td>No</td>
                        <td>Coming Soon</td>
                    </tr>
                    <tr className="table-header-row">
                        <th>Chrome Extension</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SEO Panel</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>Cookies &amp; Cache</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>Responsive Layout</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>Environment Switcher</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>Take Screenshot</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>Live Edit</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>What is..?</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr className="table-header-row">
                        <th>Integration</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <td>Google Analytics</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>Contentful</td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default PricingTable;