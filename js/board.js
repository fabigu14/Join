let currentDraggedElement;
let currentDraggedCategory;
let containerId = 0;

async function initboard(){
    
    await init();
    updateHTML();

}
/**
 * 
 * @param {}
 */

function updateHTML(){
    
    let toDo = tasks.filter(t => t['state'] == 'toDo');
    update('toDo', toDo);

    let inProgress = tasks.filter(t => t['state'] == 'inProgress');
    update('inProgress', inProgress);
    
    let testing = tasks.filter(t => t['state'] == 'testing');
    update('testing', testing);
    
    let done = tasks.filter(t => t['state'] == 'done');
    update('done', done);
    
    containerId = 0;
}

function update(containerID, array){
    
    document.getElementById(containerID).innerHTML = '';
    for (let i = 0; i < array.length; i++) {
    const element = array[i];
    document.getElementById(containerID).innerHTML += generateToDoHTML(element,i);

    console.log(containerId);
    containerId++;
    
    }

}

function generateToDoHTML(element, i){
    

    console.log(containerId);
    return `<div draggable="true" onclick="openContainer(${i})" ondragstart="startdragging(${i}, '${element['state']}')" class="taskContainer">${element['title']}</div>
            

            <div id="openContainer${containerId}" class="openContainer d-none">
            <div class="infoBox">
            <div class="headlinebox">
            <div class="headline"><h2>${tasks[containerId]['title']}</h2></div>
            <div onclick="closeContainer()" class="image"><img src="/img/x-mark-16.png"></div>
            </div>
            <div class="descriptionContainer">${tasks[containerId]['description']}</div>
            <div class="date-section"><p>Deadline: ${tasks[containerId]['due_date']}</p></div>
            
            <div class="assigned-container">
            <div class="assignedUser"><p>Assigned To:</p></div>
            <div class="profileImage">
            <img src="../img/fabi.jpg" alt="profile-img">
            </div>
            
            <div onclick="deletetasks()" class="deleteButton">
            <button>Delete</button>
            </div>
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
function openContainer(id){
    console.log(id);
    document.getElementById(`openContainer` + id).classList.remove('d-none');
        
}

function closeContainer(){

    document.getElementById('openContainer').classList.add('d-none');
}

function deletetasks(id){

    tasks.splice(id, 1);
    updateHTML();
    
}