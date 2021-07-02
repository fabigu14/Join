let currentDraggedElement;
let currentDraggedCategory;

/**
 * load Json Array tasks
 */
async function initboard() {
    setQueryStringParameter('currentUser', currentUser['username']);
    await init();
    updateHTML();
}
/**
 * 
 * @param {array} - onload function / load tasks to the board containers
 */

function updateHTML() {

    let toDo = tasks.filter(t => t['state'] == 'toDo');
    update('toDo', toDo, 'toDocolor');

    let inProgress = tasks.filter(t => t['state'] == 'inProgress');
    update('inProgress', inProgress, 'inProgressColor');

    let testing = tasks.filter(t => t['state'] == 'testing');
    update('testing', testing, 'testingColor');

    let done = tasks.filter(t => t['state'] == 'done');
    update('done', done, 'doneColor');

    saveTasksToServer();
}

/**
 * 
 * @param {id} containerID - load the id container
 * @param {json} array - load the tasks
 * @param {string} taskColor - load tasks color 
 */

function update(containerID, array, taskColor) {

    document.getElementById(containerID).innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        document.getElementById(containerID).innerHTML += generateToDoHTML(element, i, taskColor);
        // generateUsersHtml(element['assigned_users']);
    }

}

/**
 *  
 * @param {*} element 
 * @param {int} i 
 * @param {*} taskColor - generate tasks color 
 * @returns 
 */

function generateToDoHTML(element, i, taskColor) {


    console.log(element);
    return `<div draggable="true" onclick="openContainer('${element['title']}', '${element['description']}', '${element['due_date']}', '${element['assigned_users']['0']['username']}')" ondragstart="startdragging(${i}, '${element['state']}')" class="taskContainer ${taskColor}">${element['title']}</div>
            <div id="openContainer" class="openContainer  d-none">
            </div>
    `;

}

/**
 * allow to drag and drop tasks
 * 
 * @param {drag/drop} id 
 * @param {drag/drop} category 
 */

function startdragging(id, category) {
    // console.log(category);
    currentDraggedElement = id;
    currentDraggedCategory = category;

}

function allowDrop(ev) {
    ev.preventDefault();

}

/**
 * 
 * @param {*} category - this function allow to move the tasks
 */

function moveTo(category) {
    console.log(currentDraggedCategory);
    let toMove = tasks.filter(element => element['state'] == currentDraggedCategory);
    // console.log(toMove);
    toMove[currentDraggedElement]['state'] = category;
    updateHTML();

}

/**
 * 
 * @param {elemen} id 
 */

function highlight(id) {

    document.getElementById(id).classList.add('grey-box-highlight');

}

function removehighlight(id) {

    document.getElementById(id).classList.remove('grey-box-highlight');

}

/**
 * this function shows the task container content 
 * 
 * @param {json} title 
 * @param {json} description 
 * @param {json} due_date 
 * @param {json} users 
 */
function openContainer(title, description, due_date, username) {

    let container = document.getElementById(`openContainer`);

    container.innerHTML = `<div class="infoBox">
    <div class="headlinebox">
    <div class="headline"><h2>${title}</h2></div>
    <div onclick="closeContainer()" class="image"><img src="/img/x-mark-16.png"></div>
    </div>
    <div class="descriptionContainer">${description}</div>
    <div class="date-section"><p>Deadline: ${due_date}</p></div>
    
    <div class="assigned-container">
    <div class="assignedUser"><p>Assigned To: <span id="users_assigned">${username}</span> </p></div>

    <div class="profileImage">
    <img src="../img/fabi.jpg" alt="profile-img"></div>
    <div onclick="deletetasks()" class="deleteButton">
    <button>Delete</button>
    </div>
    </div>`
    container.classList.remove('d-none');


}

function generateUsersHtml(users) {
    let userNames = document.getElementById('users_assigned');
    console.log(users);
    userNames.innerHTML = '';

    users.forEach(user => {
        userNames.innerHTML += `${user}, `;
    });
}

function closeContainer() {

    document.getElementById('openContainer').classList.add('d-none');
}

/**
 * 
 * @param {json} id - delete the task from the board
 */

function deletetasks(id) {

    tasks.splice(id, 1);
    updateHTML();

}

function setArray(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}