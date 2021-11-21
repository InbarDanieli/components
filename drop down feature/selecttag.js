const input = document.getElementById("input")
const e = document.getElementById("items");
const Textoutput = document.getElementById("output");
const DivEditArea = document.getElementById("EditArea");

// try to understand!!!!!!!!!!!
function show() {
  var as = document.forms[0].items.value;
  var strUser = e.options[e.selectedIndex].text;
  Textoutput.innerHTML = strUser;
}
e.onchange = show;
show();

//add "option" item
function AddItem() {
  if (input.value === "") {
    alert("cannot add blank value to your list")
  }
  else {
    const item = document.createElement('option');
    item.text = input.value;
    e.appendChild(item);
    input.value = "";
  }
}
input.addEventListener("keypress", (k) => {
  if (k.key === 'Enter') {
    AddItem()
  }
})

function DelMultypulItems()
{
  var selected = [];
  for (var option of e.options)
  {
      if (option.selected) {
          selected.push(option.index);
      }
  }
  let Number = selected.length
  console.log(Number);
  for (i = Number - 1; i >= 0; i --)
  {
      e.remove(selected[i]);
  }
}


//create Delete items button
const editButt = document.getElementById("EditButton")
const DelButton = document.createElement("button");
DelButton.id = "DelButton";
DelButton.innerHTML = "delete"
DelButton.addEventListener("click", () => {
  if (e.selectedIndex === -1) {
    alert("you need to select the item you want to delete")
    console.log(e.selectedIndex);
  }
  else {
    DelMultypulItems()
    // e.removeChild(e[e.selectedIndex])
    // console.log(e.selectedIndex);
  }
})

let tooltip = document.getElementById("ToolTip")
tooltip.style.visibility = "hidden"
var allform = document.querySelectorAll("#NonEditArea input, #NonEditArea button");
//when click on the edit button
function EditItems() {

  if (!editButt.classList.contains("open")) {
    tooltip.style.visibility = "visible"
    e.setAttribute("multiple", true);
    e.classList.add("DropDownMult");
    DivEditArea.appendChild(DelButton);
    DivEditArea.classList.add("EditArea");
    document.body.classList.add("Background");
    editButt.classList.add("EditButt");
    editButt.innerHTML = "X";
    for (let el of allform) { el.disabled = true;}

  }
  else {
    tooltip.style.visibility = "hidden"
    e.removeAttribute("multiple")
    e.classList.remove("DropDownMult")
    DivEditArea.removeChild(DelButton);
    DivEditArea.classList.remove("EditArea")
    document.body.classList.remove("Background");
    editButt.classList.remove("EditButt")
    editButt.innerHTML = "edit"
    for (let el of allform) { el.disabled = false; }
  }
  editButt.classList.toggle("open")
  document.getElementById("CenterArea").classList.toggle("CenterArea")
}