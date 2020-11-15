const findInput = document.querySelector('#font-size-control');

const findSpan = document.querySelector('#text');

findInput.addEventListener('change', () => {
  findSpan.style.fontSize = findInput.value + 'px';
});
