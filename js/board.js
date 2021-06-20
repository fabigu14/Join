let currentDraggedElement;
let allTasks = [{

    'id': 0,
    'title': 'Test1',
    'category': 'open'

},{

    'id': 1,
    'title': 'Test2',
    'category': 'open'

},{

    'id': 2,
    'title': 'Test3',
    'category': 'open'

}];



function updateHTML(){

    let toDos = allTasks.filter(t => t['category'] == 'toDos');
    updatetask('toDos', toDos);
    let inProgress = allTasks.filter(t => t['category'] == 'inProgress');
    updatetask('inProgress', inProgress);
    let testing = allTasks.filter(t => t['category'] == 'testing');
    updatetask('testing', testing);
    let closed = allTasks.filter(t => t['category'] == 'closed');
    updatetask('closed', closed);
  

}

function updatetask(open){
    
    document.getElementById('open').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
    const element = open[i];
    document.getElementById('open').innerHTML += generateToDoHTML(element);
        
    }

}

function generateToDoHTML(element){

    return `<div draggable="true" onclick="openContainer(${element['id']})" ondragstart="startdragging(${element['id']})" class="taskContainer">${element['title']}</div>`;

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

    document.g

}
