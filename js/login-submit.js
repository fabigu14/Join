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

// var loggedIn = false;

// function authenticate() {
//     var password = document.getElementById('password').value;
    
//     loggedIn = login(password);
//     status();
//   }
  
//   function login(password) {
//       var storedPassword = '123';
  
//       return password == storedPassword;
//   }
  
//   function status() {
//     if(loggedIn) {
//       console.log('You are in :)');
//     } else {
//       console.log('You are not in :(');
//     }
//   }

function authenticate() {
    let loginname = document.getElementById('loginname').value;

    for (let i = 0; i < users.length; i++) {
        const username = users[i];
        if(loginname == users[i]['username']) {
            console.log('User gefunden', users[i]);
            checkPassword(users[i]);
            break;
        } {
            console.log('User nicht gefunden');
        }
    }
}

function checkPassword(user) {
    let loginpassword = document.getElementById('loginpassword').value;
    
    if(loginpassword == user['password']) {
        console.log('Authentifizierung erolgreich!');
    } else {
        console.log('Falsches Passwort!');
    }
}