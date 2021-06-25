let inputFields = ['title', 'due_date', 'category_value', 'urgency_value', 'description'];
let task = {};
let usersAssigned = [];
let usersToAssign = [];
let dropdownIsShowing = false;

async function initTask() {
    await init();
    initUsersToAssign();
}

function initUsersToAssign() {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        usersToAssign[i] = user;
    }
}

function createTask() {
    inputFields.forEach(inputField => {
        let currentField = document.getElementById(inputField);
        let inputValue = currentField.value;
        task[inputField] = inputValue;
    });
    task['state'] = 'toDo';
    task['assigned_users'] = usersAssigned;

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
    usersAssigned = [];
    showUsersAssigned();
    initUsersToAssign();
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

function showUsersAssigned() {
    loadUsersAssigned();
}

function loadUsersToAssign() {

    document.getElementById('users_to_assign').innerHTML = '';
    for (let i = 0; i < usersToAssign.length; i++) {
        const user = usersToAssign[i];
        document.getElementById('users_to_assign').innerHTML += generateHTML(user, i);
    }
}

function loadUsersAssigned() {
    document.getElementById('assigned_users').innerHTML = '';
    for (let i = 0; i < usersAssigned.length; i++) {
        const user = usersAssigned[i];
        document.getElementById('assigned_users').innerHTML += generateAssignedHTML(user);
    }
}

function generateAssignedHTML(user) {
    let html =
        `
        <div class="tooltip">
            <img class="person-assigned" src="../` + user['img'] + `" alt="profile-img">
            <span class="tooltip-text">${user['email']}</span>
        </div>
        `;
    return html;
}

function generateHTML(user, index) {
    let html =
        `
        <div class="tooltip">
        <img onclick="addToAssigned(${index})" class="person-assigned" src="../` + user['img'] + `" alt="profile-img">
            <span class="tooltip-text">${user['email']}</span>
        </div>
        `;
    return html;
}

function addToAssigned(userIndex) {
    usersAssigned.push(usersToAssign[userIndex]);
    removeFromToAssign(userIndex);
    showUsersAssigned();
    hideDropdown();
}

function removeFromToAssign(userIndex) {
    usersToAssign.splice(userIndex, 1);
}
