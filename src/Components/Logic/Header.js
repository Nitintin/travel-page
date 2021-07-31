import React,{useState} from 'react'
import HeaderView from '../View/HeaderView'

const Header = () => {

    var counter=0;
    const [time,setTime]=useState('');
    const countDownDate = new Date("Aug 01, 2021 17:00:00").getTime();

    var clock=setInterval(()=>{
        var current = new Date().getTime();
        counter = countDownDate - current;
        
        var days = Math.floor(counter / (1000 * 60 * 60 * 24));
        var hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((counter % (1000 * 60)) / 1000);

        var finalTime = days+" d "+hours+" h "+minutes+" m "+seconds+" s"
        setTime(finalTime)

        if(counter<0){
            counter="expired";
            clearInterval(clock);
            setTime(counter)
        }
    },1000);


    return (
        <HeaderView time={time}/>
    )
}

export default Header
