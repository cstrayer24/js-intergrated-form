//declarations
    const calculator = document.querySelector('#calculator');
    const num0 = document.getElementById('0');
    const num1 = document.getElementById('1');
    const num2 = document.getElementById('2');
    const num3 = document.getElementById('3');
    const num4 = document.getElementById('4');
    const num5 = document.getElementById('5');
    const num6 = document.getElementById('6');
    const num7 = document.getElementById('7');
    const num8 = document.getElementById('8');
    const num9 = document.getElementById('9');
    const plus = document.querySelector('#add');
    const minus = document.querySelector('#subtract');
    const multiply = document.querySelector('#multiply');
    const divide = document.querySelector('#divide');
    const CE = document.querySelector('#CE');
    const buttonarr = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9];
    const wrapper=document.querySelector('#wrapper');

const p = document.getElementsByTagName('p');

    //typing numbers
    function typing(){
    buttonarr.forEach(button=>button.addEventListener('click',function(){

        console.log(wrapper.innerHTML);
    }))
    num0.addEventListener('click',function(){

        wrapper.appendChild(document.createElement('p')).append(num0.innerText);
    });
    num1.addEventListener('click',function(){

        wrapper.appendChild(document.createElement('p')).append(num1.innerText);
    });
    num2.addEventListener('click',function(){

        wrapper.appendChild(document.createElement('p')).append(num2.innerText);
    });
    num3.addEventListener('click',function(){

        wrapper.appendChild(document.createElement('p')).append(num3.innerText);
    });
    };

    typing();
const children = wrapper.childNodes;

    const clear = ()=>{

        CE.addEventListener('click',function(){

            children.forEach(p=>p.replaceWith(''));


        })


    }

    clear();





















