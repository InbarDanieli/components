/** @type {HTMLInputElement} */
const textInput = document.getElementById("textINP");
const text = document.getElementById("text");

textInput.addEventListener("input", ()=>{
text.innerHTML = textInput.value;
});

  