let users = [];
let tasks = [];



async function init() {
    setURL('http://gruppe-83.developerakademie.com/smallest_backend_ever');
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
