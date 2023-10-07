const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const inputText = (somebody) => {
    output.textContent = input.value.trim() == "" ? "Anonymous" : somebody.currentTarget.value
};
input.addEventListener("input", inputText);