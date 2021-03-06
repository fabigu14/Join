let users = [];
let tasks = [];
let currentUser = getArray('loggedUser');


async function init() {
    controleLoggedUser();
    loadNav();
    setURL('http://gruppe-83.developerakademie.com/smallest_backend_ever');
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    setTaskId();
    setUserId();
    showAndHideLinks();
}


function loadNav() {
    $.get("navbar.html", function (data) {
        $("#nav_placeholder").html(data);
    })
}

function saveTasksToServer() {

    setTaskId();
    backend.setItem('tasks', JSON.stringify(tasks));
    
}

function setTaskId() {
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        task['ID'] = i;
    }
}

function setUserId() {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        user['ID'] = i;
    }
}

function saveUsersToServer() {
    setUserId();
    backend.setItem('users', JSON.stringify(users));
}

function clearInput(inputIds) {
    inputIds.forEach(id => {
        let currentField = document.getElementById(id);
        currentField.value = '';
    });
}


function setInputValues(inputFields, JsonToFill) {
    inputFields.forEach(inputField => {
        let currentField = document.getElementById(inputField);
        JsonToFill[inputField] = currentField.value;
    });
}

function checkForInput(inputFields) {
    let inputsFilled = checkInputValues(inputFields);
    if (inputsFilled) {
        return true
    } else {
        return false;
    }
}

function checkInputValues(inputFields) {
    let inputsFilled;
    for (let i = 0; i < inputFields.length; i++) {
        const inputField = inputFields[i];
        let currentField = document.getElementById(inputField);
        let inputValue = currentField.value;
        if (inputValue == '') {

            inputsFilled = false;
            break;
        }
        else {
            inputsFilled = true;
        }
    }
    return inputsFilled;
}


function showAndHideLinks() {
    let unloggedHides = ['siteLinks', 'logoutBtn', 'dropDownMenu', 'showIcon', 'hideIcon'];

    if (currentUser == '') {
        unloggedHides.forEach(unloggedHide => {
            document.getElementById(unloggedHide).classList.add('d-none');
        });
    }
}


function controleLoggedUser() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('currentUser');

    if (currentUserIsUndefined(myParam)) {
        goToLoginPage();
    }
}

function currentUserIsUndefined(params) {
    return params == 'undefined';
}

function goToLoginPage() {
    window.location.href = "login-submit.html";
}

/**
 *  Function to add Parameter to the Url    
 * @param {string} name 
 * @param {string} value 
 */
function setQueryStringParameter(name, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
}

/**
 * 
 * @param {string} key -name of the json in localstorage
 * @returns 
 */

function logout() {
    localStorage.removeItem('loggedUser');
    goToLoginPage();
}

function setArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}