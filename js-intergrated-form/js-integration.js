


const clickDisplay = document.querySelector('#noOfclicks');
let clicks  = 0;
const main = document.querySelector('#main');
const auto = document.querySelector('#auto');

const settings = {

    autoed:false
}

clickDisplay.innerHTML = clicks.toString();





main.addEventListener('click',function(){
    
    clicks++;
    
    
    clickDisplay.innerHTML = clicks.toString();
    
});
window.setInterval(() => {
    if(clicks>=15){

       settings.autoed=true;
    }
}, 1);


setInterval(()=>{

    if(settings.autoed===true){

       auto.style.backgroundColor = 'red';
    };
});