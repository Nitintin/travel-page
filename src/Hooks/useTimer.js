
const useTimer = () => {

    var counter=0;
    const countDownDate = new Date("Aug 10, 2022 18:00:00").getTime();

    var clock=setInterval(()=>{
        var current = new Date().getTime();
        counter = countDownDate - current;
        if(counter<0){
            counter="expired";
            clearInterval(clock);
            
        }
    },1000);
    
    return counter;
}

export default useTimer
