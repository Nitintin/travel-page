import React from 'react'

const FooterView = () => {
    return (
        <footer className="gradient" id="footerSection">
            <div className="column">
                <div className="columnContent">
                    <h4>Tripzone</h4>
                    <ul>
                        <li>About</li>
                        <li>Awards</li>
                        <li>Contact Us</li>
                        <li>Feedback</li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className="columnContent">
                    <h4>Main offices</h4>
                    <ul>
                        <li>The United</li>
                        <li>India</li>
                        <li>Braxil</li>
                        <li>Canada</li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className="columnContent">
                    <h4>Sub Offices</h4>
                    <ul>
                        <li>Australia</li>
                        <li>England</li>
                        <li>France</li>
                        <li>Germany</li>
                    </ul>
                </div>
            </div>
            <div className="column lastCol">
                <div className="columnContent">
                    <h4>Disclaimer</h4>
                    <ul>
                        <li>This layout is created as a part of sirius UI Recruitments.</li>
                        <li>All the above content has no direct relation with sirius buisness</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterView
