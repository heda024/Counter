
let counter = 0;
 
const counterValue = document.querySelector('.counter-value');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');
 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});