// function toggleLoginSubmit() {
//     let login = document.getElementById('loginContainer');
//     let submit = document.getElementById('submitContainer');

//     login.classList.toggle('d-none');
//     submit.classList.toggle('d-none');
// }


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
    let name = document.getElementById('nameInput');
    let username = document.getElementById('usernameInput');
    let email = document.getElementById('emailInput');
    let password = document.getElementById('passwordInput');

    let user = {
        'name': name.value,
        'username': username.value,
        'email': email.value,
        'password': password.value
    };
    name.value = '';
    username.value = '';
    email.value = '';
    password.value = '';

    users.push(user);
    backend.setItem('users', JSON.stringify(users));
}

// function deleteUser(name) {
//     backend.deleteItem('users');
//   }