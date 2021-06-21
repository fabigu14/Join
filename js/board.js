let currentDraggedElement;


function updateHTML(){

    let toDos = tasks.filter(t => t['title'] == 'toDos');
    updatetask('toDos', toDos);
    let inProgress = tasks.filter(t => t['title'] == 'inProgress');
    updatetask('inProgress', inProgress);
    let testing = tasks.filter(t => t['title'] == 'testing');
    updatetask('testing', testing);
    let closed = tasks.filter(t => t['title'] == 'closed');
    updatetask('closed', closed);
  

}

function updatetask(open){
    
    document.getElementById('open').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
    const element = open[i];
    document.getElementById('open').innerHTML = generateToDoHTML(element);
        
    }

}

function generateToDoHTML(element){

    return `<div draggable="true" onclick="openContainer(${element['title']})" ondragstart="startdragging(${element['title']})" class="taskContainer">${element['title']}</div>
            <div id="openContainer" class="openContainer d-none">
            <div class="infoBox">
            <div class="headlinebox">
            <div class="headline"><h2>test</h2></div>
            <div onclick="closeContainer()" class="image"><img src="/img/x-mark-16.png"></div>
            </div>
            <div class="descriptionContainer"></div>
            <div class="deleteButton">
            <button>Delete</button>
            </div>
            </div>
      
    `;

}

function startdragging(id){

    currentDraggedElement = id;

}

function allowDrop(ev) {
    ev.preventDefault();
  

}

function moveTo(category){

    allTasks[currentDraggedElement]['category'] = category;
    updateHTML();

}

function openContainer(){

    document.getElementById('openContainer').classList.remove('d-none');
        
    
    }

function closeContainer(){

    document.getElementById('openContainer').classList.add('d-none');
}