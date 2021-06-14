let users = [];
let tasks = [];

function init() {
    // await downloadFromServer();
    // users = JSON.parse(backend.getItem('users')) || [];
    // tasks = JSON.parse(backend.getItem('tasks')) || [];
    loadNav();
}

function loadNav() {
    $.get("navbar.html", function (data) {
        $("#nav_placeholder").html(data);
    })
}
