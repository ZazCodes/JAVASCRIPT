setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')

function setClock(){ 
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minRatio = (secondRatio + currentDate.getMinutes() )/ 60;
    const hourRatio = (minRatio + currentDate.getHours() )/ 24;

    setRotation(secHand, secondRatio)
    setRotation(minHand, minRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation (element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
 