// let inputIds = ['nameInput', 'usernameInput', 'emailInput', 'passwordInput'];
let inputIds = ['name', 'username', 'email', 'password'];
let user = {};
// let userInputsFilled;

function goToSubmit() {
    let login = document.getElementById('loginContainer');
    let submit = document.getElementById('submitContainer');

    login.style = 'transform: translateY(120%)';
    submit.style = 'transform: translateY(0%)';
}

function goToLogin() {
    document.getElementById('loginContainer').style = 'transform: translateY(0%)';
    document.getElementById('submitContainer').style = 'transform: translateY(100%)';
}

function addUser() {

    // checkUserForInput();
    if (checkForInput(inputIds)) {
        setInputValues(inputIds, user);
        addDefaultImg();
        clearInput(inputIds);
        users.push(user);
        saveUsersToServer();
        console.log('created');
    }
}

// function checkUserForInput() {
//     for (let i = 0; i < inputIds.length; i++) {
//         const inputField = inputIds[i];
//         let currentField = document.getElementById(inputField);
//         let inputValue = currentField.value;
//         if (inputValue == '') {

//             userInputsFilled = false;
//             break;
//         }
//         else {
//             userInputsFilled = true;
//         }
//     }
// }

function addDefaultImg() {
    user['img'] = '../img/defaultUser.png';
}


// function deleteUser(name) {
//     backend.deleteItem('users');
//   }

let userData = true;
let currentNumber;

function login() {
    authenticate();
}

function authenticate() {
    let loginname = document.getElementById('loginname');

    checkUserId(loginname.value);

    checkPassword(currentNumber);
}

function checkUserId(loginname) {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (loginname == user['username']) {
            return currentNumber = i;
        }
    }
    
}


function checkPassword(i) {
    let loginpassword = document.getElementById('loginpassword').value;
    let currentUser = users[i];

    if (loginpassword == currentUser['password']) {
        console.log('Authentifizierung erolgreich!');
        alert('Authentifizierung erolgreich!');
    } else {
        console.log('Falsches Passwort!');
        alert('Falsches Passwort!');
    }
}