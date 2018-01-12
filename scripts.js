
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const dayBox = document.querySelector('.day');
const utDayBox = document.querySelector('.utday');

function setDate() {
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const now = new Date();
    const day = now.getDay();
    dayBox.textContent = `${days[day]}`;
    const utDay = now.getUTCDate();
    utDayBox.textContent = `${utDay}`;

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds/60)*360)+90;
    seconds===0? secondHand.style.transition = 'none':secondHand.style.transition = '';
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;


    const mins = now.getMinutes();
    const minsDeg = ((mins/60)*360)+90;
    mins===0? minHand.style.transition = 'none':minHand.style.transition = '';
    minHand.style.transform = `rotate(${minsDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = ((hours/12)*360)+90;
    hours===0? hourHand.style.transition = 'none':hourHand.style.transition = '';
    hourHand.style.transform = `rotate(${hoursDeg}deg)`

}

setInterval(setDate,1000)