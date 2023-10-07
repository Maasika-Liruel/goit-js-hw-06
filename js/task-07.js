const fontSizeText = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeText.addEventListener('input', () => {
    const fontSize = fontSizeText.value + 'px';
    text.style.fontSize = fontSize;
});