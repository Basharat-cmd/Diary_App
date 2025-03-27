const add_button = document.getElementById('add-note');
const input_note = document.getElementById('input-field');
const name_input = document.getElementById('name-input-field');
const remove_button = document.getElementById('remove_button')
const block = document.getElementById('block');
const clearButton = document.getElementById('clear')
const holder = '<div style="margin-bottom: 15px;">Output Here :- <div>';

function addNotes(){
    for(let i = 0; i <= localStorage.length - 1; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        block.innerHTML += '<li>' + key + ' : ' + value + '</li>';
    }
}

clearButton.addEventListener('click',  ()=>{
    let whether = confirm('Are you sure you want to clear the Notes');
    if(whether){
        localStorage.clear();
        block.innerHTML = holder;
        name_input.value = '';
        input_note.value = '';
        alert('Notes cleared successfully');
    }

})

remove_button.addEventListener('click', ()=>{
    let key = name_input.value;
    if (key == '' || key == null){
        alert('no Name of note is given to delete')
        name_input.value = '';
        input_note.value = '';
    }
    else if (localStorage.getItem(key) != null){
        localStorage.removeItem(key);
        block.innerHTML = holder;
        addNotes();
        name_input.value = '';
        input_note.value = '';
    }
    else{
        alert('no such note exsist with name ' + '"' + key + '"')
        name_input.value = '';
        input_note.value = '';
    }

});


function add_single_note(key, value){
    block.innerHTML += '<li>' + key + ' : ' + value + '</li>';
}


add_button.addEventListener('click', () => {
    let key = name_input.value;
    let con = input_note.value;

    if(key == '' || key == null || con == '' || con == null){
        alert('you need to give a Name and Content to a note in order to set it');
    }
    else if(localStorage.getItem(key) != null){
        alert('the Note with Name ' +'"'+ key + '"' + ' already exsists')
    }
    else{
        console.log('asd');
        localStorage.setItem(key , con);
        add_single_note(key, con);
        name_input.value = '';
        input_note.value = '';
    }
});


block.innerHTML = holder;
addNotes();
