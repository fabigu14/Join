function showSubmit() {
    document.getElementById('submitContainer').classList.remove('d-none');
    document.getElementById('loginContainer').classList.add('d-none');
}

function showLogin() {
    document.getElementById('loginContainer').classList.remove('d-none');
    document.getElementById('submitContainer').classList.add('d-none');
}