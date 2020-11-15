const inputFinde = document.querySelector('#name-input');
const spanFinde = document.querySelector('#name-output');

inputFinde.addEventListener('input', e => {
  if (e.code === 'input') {
    spanFinde.textContent = e.target.value;
    e.target.value = '';
  } else if (e.code !== 'input') {
    spanFinde.textContent = 'незнакомец';
  }
});
