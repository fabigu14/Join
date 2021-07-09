let inputFields = ['title', 'due_date', 'category_value', 'urgency_value', 'description'];
let task = {};
let usersAssigned = [];
let usersToAssign = [];
let dropdownIsShowing = false;


async function initTask() {
    setQueryStringParameter('currentUser', currentUser['username']);
    await init();
    initUsersToAssign();
}

function initUsersToAssign() {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        usersToAssign[i] = user;
    }
}

function createTask(event) {
    event.preventDefault();
    if (checkForInput(inputFields) && isUserAssigned()) {

        setValues();
        addToTasks();
        resetInput();
        showSnackbar('snackbar_created');
    }
    return false;
}

function isUserAssigned() {
    if (usersAssigned.length !== 0) {
        return true;
    }

    else {
        showSnackbar('snackbar_user');
        return false;
    }
}

function showSnackbar(id) {
    let snackbar = document.getElementById(id);

    snackbar.className = "show";

    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

function setValues() {
    setInputValues(inputFields, task);
    task['state'] = 'toDo';
    task['assigned_users'] = usersAssigned;
}

function addToTasks() {
    tasks.push(task);
    saveTasksToServer();
}

function resetInput() {
    clearInput(inputFields);
    task = {};
    usersAssigned = [];
    showUsersAssigned();
    initUsersToAssign();
}

function showInputDropdown(id) {
    document.getElementById(id + '_dropdown').classList.remove('display-none');
    document.getElementById(id).classList.add('input-radius');
    dropdownIsShowing = true;
    showOverlay();
}

function showOverlay() {
    document.getElementById('overlay').classList.remove('display-none');
}

function hideOverlay() {
    document.getElementById('overlay').classList.add('display-none');
}

function setSelection(selection, inputId) {
    document.getElementById(inputId).value = selection;
    hideInputDropdown();
}

function hideInputDropdown() {
    if (dropdownIsShowing) {
        document.getElementById('category_dropdown').classList.add('display-none');
        document.getElementById('urgency_dropdown').classList.add('display-none');
        document.getElementById('users_to_assign').classList.add('display-none');
        document.getElementById('users_to_assign').classList.add('display-none');
        hideOverlay();
        dropdownIsShowing = false;
    }
}

function showUsersToAssign() {
    loadUsersToAssign();
    document.getElementById('users_to_assign').classList.remove('display-none');
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
            <img class="person-assigned" src="${user['img']}" alt="profile-img">
            <span class="tooltiptext">${user['email']}</span>
        </div>
        `;
    return html;
}

function generateHTML(user, index) {
    let html =
        `
        <div class="tooltip">
        <img onclick="addToAssigned(${index})" class="person-assigned" src="${user['img']}" alt="profile-img">
        <span class="tooltiptext">${user['email']}</span>
        </div>
        `;
    return html;
}

function addToAssigned(userIndex) {
    usersAssigned.push(usersToAssign[userIndex]);
    removeFromToAssign(userIndex);
    showUsersAssigned();
    hideInputDropdown();
}

function removeFromToAssign(userIndex) {
    usersToAssign.splice(userIndex, 1);
}
