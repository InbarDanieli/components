const butt = document.getElementById("button")
const Editbutt = document.getElementById("Editbutton")
const checkBox = document.getElementById("CheckBox")

var allform = document.querySelectorAll("#EditArea input, #EditArea #button");

butt.addEventListener("click", ()=>{
  for (let el of allform) {el.disabled = true; }
})

Editbutt.addEventListener("click", ()=>{
  for (let el of allform) {el.disabled = false; }
})


checkBox.addEventListener('change', function () {
  if (checkBox.checked) {
    for (let el of allform) {el.disabled = true; }
    Editbutt.style.display = "none";
    }
  else {
    for (let el of allform) {el.disabled = false; }
    Editbutt.style.display = "";
  }
});