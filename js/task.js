inputFields = ['title', 'due_date', 'category_value', 'urgency_value', 'description'];
task = {};
usersAssigned = [];
dropdownIsShowing = false;

function createTask() {
    inputFields.forEach(inputField => {
        let currentField = document.getElementById(inputField);
        let inputValue = currentField.value;
        task[inputField] = inputValue;
    });

    addToTasks();
    clearInput();
}

function addToTasks() {
    tasks.push(task);
    saveTasksToServer();
}

function clearInput() {
    inputFields.forEach(inputField => {
        let currentField = document.getElementById(inputField);
        currentField.value = '';
    });
    task = {};
}

function showDropdown(id) {
    document.getElementById(id + '_dropdown').classList.remove('d-none');
    document.getElementById(id).classList.add('input-radius');
    dropdownIsShowing = true;
    showOverlay();
}

function showOverlay(){
    document.getElementById('overlay').classList.remove('d-none');
}

function hideOverlay(){
    document.getElementById('overlay').classList.add('d-none');
}

function setSelection(selection, inputId) {
    document.getElementById(inputId).value = selection;
    hideDropdown();
}

function hideDropdown() {
    if (dropdownIsShowing) {
        document.getElementById('category_dropdown').classList.add('d-none');
        document.getElementById('urgency_dropdown').classList.add('d-none');
        hideOverlay();
        dropdownIsShowing = false;
    }
}