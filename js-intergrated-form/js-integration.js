

window.addEventListener('load',function(e){
const clickDisplay = document.querySelector('#noOfclicks');
let clicks  = 0;
const main = document.querySelector('#main');
const doubler = document.querySelector('#dubButton');
let doubled = false;


if (clicks>1) {
  doubled===true;
};
 
if(doubled===true){

    doubler.addEventListener('click',function(){

        clicks*=2;
        clickDisplay.innerHTML = clicks.toString();

    });
};



main.addEventListener('click',function(){
    
    clicks++;
    
    
    clickDisplay.innerHTML = clicks.toString();

});

});