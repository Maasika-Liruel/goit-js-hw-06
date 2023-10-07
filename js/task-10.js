function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
createButton.addEventListener('click', () => {
  createBoxes(input.value);
});
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const initialSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const SIZE = initialSize + i * 10;
    div.style.width = `${SIZE}px`;
    div.style.height = `${SIZE}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }

  boxes.appendChild(fragment); 
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
