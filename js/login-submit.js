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