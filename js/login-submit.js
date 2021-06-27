// let inputIds = ['nameInput', 'usernameInput', 'emailInput', 'passwordInput'];
let inputIds = ['name', 'username', 'email', 'password'];
let user = {};
let userInputsFilled;

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

    checkUserForInput();
    if (userInputsFilled) {
        console.log('true');
        setInputValues(inputIds, user);
        addDefaultImg();
        clearInput(inputIds);
        users.push(user);
        saveUsersToServer();
        console.log('created');
    }
}

function checkUserForInput() {
    for (let i = 0; i < inputIds.length; i++) {
        const inputField = inputIds[i];
        let currentField = document.getElementById(inputField);
        let inputValue = currentField.value;
        if (inputValue == '') {
        
            userInputsFilled = false;
            break;
        }
        else {
            userInputsFilled = true;
        }
    }
}

function addDefaultImg() {
    user['img'] = '../img/defaultUser.png';
}


// function deleteUser(name) {
//     backend.deleteItem('users');
//   }