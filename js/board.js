let currentDraggedElement;
let currentDraggedCategory;


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
    
    console.log(inProgress);
    let testing = tasks.filter(t => t['state'] == 'testing');
    update('testing', testing);
    
    console.log(testing);
    let done = tasks.filter(t => t['state'] == 'done');
    update('done', done);
    

}

function update(containerID, array){

    document.getElementById(containerID).innerHTML = '';
    for (let i = 0; i < array.length; i++) {
    const element = array[i];
    document.getElementById(containerID).innerHTML += generateToDoHTML(element,i);
        
    }

}

function generateToDoHTML(element, i){

    return `<div draggable="true" onclick="openContainer(${element[i]})" ondragstart="startdragging(${i}, ${element[i]['state']})" class="taskContainer">${element['title']}</div>
            

            <div id="openContainer" class="openContainer d-none">
            <div class="infoBox">
            <div class="headlinebox">
            <div class="headline"><h2>${element['title']}</h2></div>
            <div onclick="closeContainer()" class="image"><img src="/img/x-mark-16.png"></div>
            </div>
            <div class="descriptionContainer">${element['description']}</div>
            <div class="date-section"><p>Deadline: ${element['due_date']}</p></div>
            
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
    
    currentDraggedElement = id;
    currentDraggedCategory = category;
    
}

function allowDrop(ev) {
    ev.preventDefault();
  
}

function moveTo(category){
    
    let toMove = tasks.filter(element => element['state'] == currentDraggedCategory);
    toMove[currentDraggedElement]['state'] = category;
    updateHTML();

}

function highlight(id){

    document.getElementById(id).classList.add('grey-box-highlight');

}

function removehighlight(id){

    document.getElementById(id).classList.remove('grey-box-highlight');

}
function openContainer(){

    document.getElementById('openContainer').classList.remove('d-none');
        
}

function closeContainer(){

    document.getElementById('openContainer').classList.add('d-none');
}

function deletetasks(id){

    tasks.splice(id, 1);
    updateHTML();
    
}