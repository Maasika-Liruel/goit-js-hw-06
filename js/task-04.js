const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
let currentValue = 0;
decrementBtn.addEventListener('click', () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});
incrementBtn.addEventListener('click', () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});