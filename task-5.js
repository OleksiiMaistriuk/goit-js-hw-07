const inputFinde = document.querySelector('#name-input');
const spanFinde = document.querySelector('#name-output');

inputFinde.addEventListener('input', e => {
  spanFinde.textContent = e.target.value;
  if (e.target.value === '') {
    spanFinde.textContent = 'незнакомец';
  }
});
