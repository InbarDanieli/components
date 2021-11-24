const INPFirst = document.getElementById("INPName");
const INPLast = document.getElementById("INPLast");
const AddButton = document.getElementById("AddButt"); 

const par = document.getElementById("par");

function AddName()
{
  localStorage.setItem(INPLast.value, INPFirst.value);
  location.reload()
}

function RemoveAll()
{
  localStorage.clear();
  location.reload();
}

for(let i = 0; i < localStorage.length; i++)
{
  //last name
  const key = localStorage.key(i);

  //first name
  const Value = localStorage.getItem(key);

  let NewLine = document.createElement('br')
  par.appendChild(NewLine);
  par.innerHTML += `${Value} ${key}` 
} 


console.log(localStorage)

