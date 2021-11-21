let colorInput = document.getElementById('color');
let colorValue = colorInput.value;

colorInput.addEventListener('input', () =>{
  document.getElementById('colorVal').innerHTML = colorInput.value;
  document.body.style.backgroundColor = colorInput.value;
});
