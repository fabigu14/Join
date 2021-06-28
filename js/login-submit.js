// let inputIds = ['nameInput', 'usernameInput', 'emailInput', 'passwordInput'];
let inputIds = ['name', 'username', 'email', 'password'];
let user = {};
// let userInputsFilled;

function goToSubmit() {
    let login = document.getElementById('loginContainer');
    let submit = document.getElementById('submitContainer');

    document.getElementById('guestContainer').classList.add('d-none');
    login.style = 'transform: translateY(120%)';
    submit.style = 'transform: translateY(0%)';
}

function goToLogin() {
    document.getElementById('guestContainer').classList.remove('d-none');
    document.getElementById('loginContainer').style = 'transform: translateY(0%)';
    document.getElementById('submitContainer').style = 'transform: translateY(100%)';
}

function addUser() {

    
    if (checkForInput(inputIds)) {
        setInputValues(inputIds, user);
        addDefaultImg();
        clearInput(inputIds);
        users.push(user);
        saveUsersToServer();
        console.log('created');
    }
}


function addDefaultImg() {
    user['img'] = '../img/defaultUser.png';
}


// function deleteUser(name) {
//     backend.deleteItem('users');
//   }

let currentUserId;
let checkedUserNumber;

function loginAsGuest() {
    checkUserId('test');
    checkPassword(currentUserId, 'tes');
}

function login() {
    checkedUserNumber = 0;
    authenticate();
}

function authenticate() {
    let loginname = document.getElementById('loginname');

    checkUserId(loginname.value);
    loginname.value = '';
    checkPassword(currentUserId);
}

function checkUserId(loginname) {

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (loginname == user['username']) {
            return currentUserId = i;
        } else {
            checkedUserNumber++;
        }
    }
    nonUserFound(checkedUserNumber);
}

function nonUserFound(checkedUserNumber) {
    if (checkedUserNumber > 0) {
        alert('User do not exist!');
    }
}


function checkPassword(i, guestPassword) {
    let loginpassword = document.getElementById('loginpassword');
    let currentUser = users[i];

    if (loginpassword.value == currentUser['password'] || guestPassword == currentUser['password']) {
        window.location.href = '../html/board.html';
        setArray('loggedUser', currentUser);
    } else {
        alert('Wrong Password!');
    }
    loginpassword.value = '';
}


function setArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}


function getArray(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}