function editDish() {
    console.log("edit event")
    const menuElement = event.target.parentElement.parentElement
    const idElement = menuElement.id;

    document.getElementById(idElement).querySelector('.remove-dish').classList.add('hidden');
    document.getElementById(idElement).querySelector('.edit-dish').classList.add('hidden');
    document.getElementById(idElement).querySelector('.cancel-edit-dish').classList.remove('hidden');
    document.getElementById(idElement).querySelector('.apply-edit-dish').classList.remove('hidden');  
    
    menuElement.childNodes.forEach((node) => toggleEditable(node));

    $('.cancel-edit-dish').click(cancelEdition);
    $('.apply-edit-dish').click(applyEdition);  
}

function toggleEditable(node){
    if(node.className != 'toolbar'){
        if(node.classList.contains('editable')){
            node.classList.remove('editable');
            node.contentEditable = "false";
        } else {
            node.classList.add('editable');
            node.contentEditable = "true";
        }
    }
}

function applyEdition() {
    console.log("accept")
    exitEdition()
}

function cancelEdition() {
    console.log("cancel")
    exitEdition()
}

function exitEdition(){
    const menuElement = event.target.parentElement.parentElement
    const idElement = menuElement.id;

    document.getElementById(idElement).querySelector('.remove-dish').classList.remove('hidden');
    document.getElementById(idElement).querySelector('.edit-dish').classList.remove('hidden');
    document.getElementById(idElement).querySelector('.cancel-edit-dish').classList.add('hidden');
    document.getElementById(idElement).querySelector('.apply-edit-dish').classList.add('hidden');

    menuElement.childNodes.forEach((node) => toggleEditable(node));
  }