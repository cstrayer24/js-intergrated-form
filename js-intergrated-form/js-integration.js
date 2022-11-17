
const valuebox= document.querySelector('#noOfclicks');
const main = document.querySelector('#main');

var clicks = 0;

let value = valuebox.textContent;
const dubBtn = document.querySelector('#dubButton');

let test = true;


const addclicks = ()=>{

    main.addEventListener('click',function(){


        clicks++;
       valuebox.textContent = clicks.toString();

       if(clicks===1){
   
           dubBtn.style.backgroundColor='blue';
           dubBtn.addEventListener('mouseout',function(){
        

            console.log('hi');

           
           })
       };

    });

}



addclicks();
/*class addclicks{



    constructor(){

        this.main = main;
        this.valuebox = valuebox;
        this.clicks = clicks;
        this.value = valuebox.textContent;

        main.addEventListener('click',function(){
        
        clicks+=200;//for test
      valuebox.textContent = clicks.toString();
        console.log(clicks);
    });
   



}

 }


 
 


class double{


    constructor(){

        this.dubBtn = dubBtn;
        this.clicks = clicks;
        
      
    }
}



class auto{}

class clicker{
constructor(){

    new addclicks;
    new double;
}

}


new clicker;



if(test=true && clicks>200){

    alert('hi');
}*/