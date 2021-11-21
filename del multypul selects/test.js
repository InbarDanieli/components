const SelectedPets = document.getElementById('pets')

document.getElementById('submit').onclick = function() {
    var selected = [];
    for (var option of SelectedPets.options)
    {
        if (option.selected) {
            selected.push(option.index);
            console.log(option.index);
        }
    }
    let Number = selected.length
    console.log(Number);
    for (i = Number - 1; i >= 0; i --)
    {
        SelectedPets.remove(selected[i]);
    }
}


