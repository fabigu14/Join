let users = [];
let tasks = [];

setURL('http://developerakademie.com/smallest_backend_ever');

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    loadNav();
}

function loadNav() {
    $.get("navbar.html", function (data) {
        $("#nav_placeholder").html(data);
    })
}

function saveTasksOnServer(){
    backend.setItem('tasks', JSON.stringify(tasks));
}
