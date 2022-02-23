/** @type {HTMLInputElement} */ 
const text = document.getElementById("text");
const par = document.getElementById("textINP");

text.addEventListener("input", ()=>{
par.innerHTML = text.value;

})