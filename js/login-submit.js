function toggleLoginSubmit() {
    let login = document.getElementById('loginContainer');
    let submit = document.getElementById('submitContainer');

    login.classList.toggle('d-none');
    submit.classList.toggle('d-none');
}