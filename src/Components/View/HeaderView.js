import React from 'react'
import useTimer from '../../Hooks/useTimer'

const HeaderView = ({time=0}) => {
    const timer = useTimer();
    console.log(timer)
    return (
        <header className="gradient" id="headerSection">
            <p>Book now to get exciting travel deals. Upto 40% off on credit card payments.</p>
            <p className="offerTimer">Offers ends in  <span className="countDown">{time}</span></p>
        </header>
    )
}

export default HeaderView
