let counterValue = 0;

function incremenet() {
  counterValue += 1;
  value();
}

function decremenet() {
  counterValue -= 1;
  value();
}
function value() {
  valueAcc.textContent = counterValue;
}
const buttonIncremenet = document.querySelector('.incremenet');
const buttonDecremenet = document.querySelector('.decremenet');
const valueAcc = document.querySelector('#value');

buttonDecremenet.addEventListener('click', decremenet);
buttonIncremenet.addEventListener('click', incremenet);
