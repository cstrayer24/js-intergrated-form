const submit = document.querySelector('#submit');
const textBox = document.querySelector('#textbox');
const userOutput = document.querySelector('#output');

submit.addEventListener('click',function(){
    let userInput = textBox.value;
    userOutput.innerHTML = `${userInput}`;

    console.log(userInput);

});