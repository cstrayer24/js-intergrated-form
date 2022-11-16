
const valuebox= document.querySelector('#noOfclicks');
const main = document.querySelector('#main');

let clicks = 0;

let value = valuebox.textContent;



class addclicks{



    constructor(){

        this.main = main;
        this.valuebox = valuebox;
        this.clicks = clicks;
        this.value = valuebox.textContent;

        main.addEventListener('click',function(){
        
        clicks++;
      valuebox.textContent = clicks.toString();
        console.log(clicks);
    });
   



}

 }


 
 


class double{}



class auto{}

class clicker{


}


new addclicks;