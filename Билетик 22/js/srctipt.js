
setInterval(()=>{
    const now = new Date().getTime();
    const endDate = new Date("2 Apr 2026 11:40:00").getTime();
    let leftTime = endDate - now;
    let days = Math.floor(leftTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor(leftTime % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(leftTime % (1000*60*60) / (1000*60));
    let seconds = Math.floor(leftTime % (1000*60) / (1000));
    function FormatD(){
        if (days == 0 || days>=5 && days <=20){
            return 'Дней';
        }
        else if ((days %10)==1)
            return 'День';
        else if ([2,3,4].includes(days%10))
            return 'Дня';
        else
            return 'Дней';
    }
    function FormatH(){
        if (hours == 0 || days>=5 && days <=20){
            return 'Часов';
        }
        else if ((hours %10)==1)
            return 'Час';
        else if ([2,3,4].includes(hours%10))
            return 'Часа';
        else
            return 'Часов';
    }
    function FormatM(){
        if (minutes == 0 || minutes>=5 && minutes <=20){
            return 'Минут';
        }
        else if ((minutes %10)==1)
            return 'Минута';
        else if ([2,3,4].includes(days%10))
            return 'Минуты';
        else
            return 'Минут';
    }
    function FormatS(){
        if (seconds == 0 || seconds>=5 && seconds <=20){
            return 'Секунд';
        }
        else if ((seconds %10)==1)
            return 'Секунда';
        else if ([2,3,4].includes(seconds%10))
            return 'Секунды';
        else
            return 'Секунд';
    }
    if(leftTime >0)
    {
        document.querySelector('#days').textContent = days.toString().padStart(2,"0") + " " + FormatD();
        document.querySelector('#hours').textContent = hours.toString().padStart(2,"0") + " " + FormatH();
        document.querySelector('#minutes').textContent = minutes.toString().padStart(2,"0") + " " + FormatM();
        document.querySelector('#seconds').textContent = seconds.toString().padStart(2,"0") + " " + FormatS();
    }
    else{
        document.querySelector('.timer').textContent ="Время вышло";
    }
},1000)