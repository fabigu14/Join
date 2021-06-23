let inputFields = ['title', 'due_date', 'category_value', 'urgency_value', 'description'];
let task = {};
let usersAssigned = [];
let usersToAssign;
let dropdownIsShowing = false;


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

function showOverlay() {
    document.getElementById('overlay').classList.remove('d-none');
}

function hideOverlay() {
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
        document.getElementById('users_to_assign').classList.add('d-none');
        hideOverlay();
        dropdownIsShowing = false;
    }
}

function showUsersToAssign() {
    loadUsersToAssign();
    document.getElementById('users_to_assign').classList.remove('d-none');
    dropdownIsShowing = true;
    showOverlay();
}

function loadUsersToAssign() {
    usersToAssign = users;
    document.getElementById('users_to_assign').innerHTML = '';
    for (let i = 0; i < usersToAssign.length; i++) {
        const user = usersToAssign[i];
        document.getElementById('users_to_assign').innerHTML += generateHTML(user);
    }
}

function generateHTML(user) {
    let html = 
    `<img onclick="addToAssigned(${user})" class="person-assigned" src="../` + user['img'] + `" alt="profile-img">`;
    return html;
}

function addToAssigned(user) {
    
}

