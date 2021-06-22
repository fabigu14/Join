// function toggleLoginSubmit() {
//     let login = document.getElementById('loginContainer');
//     let submit = document.getElementById('submitContainer');

//     login.classList.toggle('d-none');
//     submit.classList.toggle('d-none');
// }
let inputIds = ['nameInput', 'usernameInput', 'emailInput', 'passwordInput'];
let requestedFields = ['name', 'username', 'email', 'password'];
let user = {}

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

    for (let i = 0; i < inputIds.length; i++) {
        const id = inputIds[i];
        let input = document.getElementById(id);
        user[requestedFields[i]] = input.value;
    }
    addDefaultImg();
    clearInput();
    users.push(user);
    saveUsersToServer();
}

function addDefaultImg(){
    user['img'] = 'img/defaultUser.png';
}

function clearInput(){
    inputIds.forEach(id => {
       let currentField =  document.getElementById(id);
       currentField.value = '';
    });
}
// function deleteUser(name) {
//     backend.deleteItem('users');
//   }