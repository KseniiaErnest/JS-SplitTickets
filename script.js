'use strict'

const buttonTip = document.querySelector('#btnTip');
const buttonCalc = document.querySelector('#btnCalc');
const boxTip = document.querySelector('#tip-box');

buttonCalc.addEventListener('click', calc);
buttonTip.addEventListener('click', (e) => {
e.preventDefault();
tip.style.display = 'block'
boxTip.style.display = 'flex'
});

function calc(e) {
  e.preventDefault();


  const people = document.querySelector('#people').value;
  const tip = document.querySelector('#tip').value;
  const tickop1 = document.querySelector('#tickop1');
  const tickop2 = document.querySelector('#tickop2');
  const tickop3 = document.querySelector('#tickop3');

if ((tickop1.checked === false && tickop2.checked === false && tickop3.checked === false) || people === '' || people < 1) {
  alert('Please fill in all fileds')
}

let priceTicket = 0;

if (tickop1.checked) {
  priceTicket = 10;
}
if (tickop2.checked) {
  priceTicket = 15;
}
if (tickop3.checked) {
  priceTicket = 17;
}

document.querySelector('#perPerson').textContent = priceTicket.toFixed(2);

let amoutTipPerPerson = (priceTicket * tip) + priceTicket;
document.querySelector('#tipPerPerson').textContent = amoutTipPerPerson.toFixed(2);

let amountTotal = amoutTipPerPerson * people;
document.querySelector('#total').textContent = amountTotal.toFixed(2);
 

}