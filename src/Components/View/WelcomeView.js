import React from 'react'
import WelcomeSVG from '../../Assets/welcome-image.svg'

const WelcomeView = () => {
    return (
        <section id="welcomeSection">
            <div className="imgContainer">
                <figure>
                    <img src={WelcomeSVG} alt="welcome" />
                </figure>
            </div>
            <div className="textContainer">
                <div className="welcomeText">
                    <h3>Life is short</h3>
                    <h3>and the world is wide !</h3>
                    <p>Stay at the comfort of your homes and book a trip to travel after the post pandemic era</p>
                    <button className="gradient">PLAN A TRIP</button>
                </div>
            </div>
        </section>
    )
}

export default WelcomeView
