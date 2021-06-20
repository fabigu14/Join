inputFields = ['title', 'due_date', 'category', 'urgency', 'description'];
task = {}
usersAssigned = [];

function createTask(){
    inputFields.forEach(inputField => {
       let currentField = document.getElementById(inputField);
       let inputValue = currentField.value;
       task[inputField] = inputValue;
    });
    addToTasks();
    clearInput();
}

function addToTasks(){
    tasks.push(task);
    saveTasksToServer();
}

function clearInput(){
    inputFields.forEach(inputField => {
        let currentField = document.getElementById(inputField);
        currentField.value = '';
     });
     task = {};
}

function showDropdown(id) {
    document.getElementById(id + '_dropdown').classList.remove('d-none');
    document.getElementById(id).classList.add('input-radius');
}

function setSelection(selection, inputId, dropdown) {
    document.getElementById(inputId).value = selection;
    hideDropdown(dropdown);
}

function hideDropdown(dropdown) {
    document.getElementById(dropdown).classList.add('d-none');
}