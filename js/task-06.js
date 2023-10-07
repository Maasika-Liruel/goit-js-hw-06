const symbols = document.querySelector("#validation-input");
function foo(symbol) {
  //  console.log(symbol.target.value.length);
    if (symbol.currentTarget.value.trim().length == symbols.dataset.length) {
        symbols.classList.add("valid")
   symbols.classList.remove("invalid")     
    }
    else {
symbols.classList.add("invalid")
   symbols.classList.remove("valid")  
    }
     
}
symbols.addEventListener("blur", foo);