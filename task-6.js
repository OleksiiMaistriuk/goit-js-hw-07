const findInput = document.querySelector('#validation-input');
const findAtribute = document.querySelector('#data-length');

findInput.addEventListener('change', e => {
  if (findInput.selectionEnd === Number(findInput.dataset.length)) {
    findInput.classList.add('valid');
    findInput.classList.remove('invalid');
  } else {
    findInput.classList.add('invalid');
    findInput.classList.remove('valid');
  }
});
