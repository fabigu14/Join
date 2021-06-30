let inputIds = ['name', 'username', 'email', 'password'];
let user = {};
let currentUserId;
let checkedUserNumber;


function goToSubmit() {
    let login = document.getElementById('loginContainer');
    let submit = document.getElementById('submitContainer');

    document.getElementById('guestContainer').classList.add('d-none');
    login.style = 'transform: translateY(120%)';
    submit.style = 'transform: translateY(0%)';
}

function goToLogin() {
    setTimeout(() => {
        document.getElementById('guestContainer').classList.remove('d-none');    
    }, 150);
    
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