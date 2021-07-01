let currentDraggedElement;
let currentDraggedCategory;

async function initboard(){
    setQueryStringParameter('currentUser', currentUser['username']);
    await init();
    updateHTML();
}
/**
 * 
 * @param {}
 */

function updateHTML(){
    
    let toDo = tasks.filter(t => t['state'] == 'toDo');
    update('toDo', toDo, 'toDocolor');

    let inProgress = tasks.filter(t => t['state'] == 'inProgress');
    update('inProgress', inProgress, 'inProgressColor');
    
    let testing = tasks.filter(t => t['state'] == 'testing');
    update('testing', testing, 'testingColor');
    
    let done = tasks.filter(t => t['state'] == 'done');
    update('done', done, 'doneColor');
    
    
    
}

function update(containerID, array, taskColor){
    
    document.getElementById(containerID).innerHTML = '';
    for (let i = 0; i < array.length; i++) {
    let element = array[i];
    document.getElementById(containerID).innerHTML += generateToDoHTML(element,i,taskColor);
    
    }

}


function generateToDoHTML(element, i, taskColor){
    
    
    console.log(element);
    return `<div draggable="true" onclick="openContainer('${element['title']}', '${element['description']}', '${element['due_date']}', '${users['name']}')" ondragstart="startdragging(${i}, '${element['state']}')" class="taskContainer ${taskColor}">${element['title']}</div>
            <div id="openContainer" class="openContainer  d-none">
            </div>
    `;

}

function startdragging(id, category){
    // console.log(category);
    currentDraggedElement = id;
    currentDraggedCategory = category;
    
}

function allowDrop(ev) {
    ev.preventDefault();
  
}

function moveTo(category){
    console.log(currentDraggedCategory);
    let toMove = tasks.filter(element => element['state'] == currentDraggedCategory);
    // console.log(toMove);
    toMove[currentDraggedElement]['state'] = category;
    updateHTML();

}


function highlight(id){

    document.getElementById(id).classList.add('grey-box-highlight');

}

function removehighlight(id){

    document.getElementById(id).classList.remove('grey-box-highlight');

}
function openContainer(title, description, due_date, users){
    
    let container = document.getElementById(`openContainer`);

    container.innerHTML = `<div class="infoBox">
    <div class="headlinebox">
    <div class="headline"><h2>${title}</h2></div>
    <div onclick="closeContainer()" class="image"><img src="/img/x-mark-16.png"></div>
    </div>
    <div class="descriptionContainer">${description}</div>
    <div class="date-section"><p>Deadline: ${due_date}</p></div>
    
    <div class="assigned-container">
    <div class="assignedUser"><p>Assigned To: ${users}</p></div>

    <div class="profileImage">
    <img src="../img/fabi.jpg" alt="profile-img"></div>
    <div onclick="deletetasks()" class="deleteButton">
    <button>Delete</button>
    </div>
    </div>`
    container.classList.remove('d-none');

    
    

}

function closeContainer(){

    document.getElementById('openContainer').classList.add('d-none');
}

function deletetasks(id){

    tasks.splice(id, 1);
    updateHTML();
    
}

function setArray(key, id) {
    localStorage.setItem(key, JSON.stringify(id));
}

function getArray(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}