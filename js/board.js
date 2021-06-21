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

function updatetask(open,closed){
    
    document.getElementById('open').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
    const element = open[i];
    document.getElementById('open').innerHTML += generateToDoHTML(element);
        
    }

    document.getElementById('closed').innerHTML = '';

    for (let i = 0; i < closed.length; i++) {
    const element = closed[i];
    document.getElementById('closed').innerHTML += generateToDoHTML(element);
        
    }


}

function generateToDoHTML(element){

    return `<div draggable="true" onclick="openContainer(${element['id']})" ondragstart="startdragging(${element['id']})" class="taskContainer">${element['title']}</div>
            <div id="openContainer" class="openContainer d-none">
            <div class="infoBox">
                <h2>Test1</h2>
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

function openContainer(id){

        document.getElementById('openContainer').classList.remove('d-none');
    
    }