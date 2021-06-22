let currentDraggedElement;

let toDos = [{

    'id': 0,
    'title': 'Kochen',
    'category': 'toDo'

},{

    'id': 1,
    'title': 'Putzen',
    'category': 'toDo'

},{

    'id': 2,
    'title': 'Einkaufen',
    'category': 'toDo'

}];

function updateHTML(){

    let toDo = toDos.filter(t => t['category'] == 'toDo');

    document.getElementById('toDo').innerHTML = '';

    for (let i = 0; i < toDo.length; i++) {
    const element = toDo[i];
    document.getElementById('toDo').innerHTML += generateToDoHTML(element);
        
    }

    let inProgress = toDos.filter(t => t['category'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
    const element = inProgress[i];
    document.getElementById('inProgress').innerHTML += generateToDoHTML(element);
        
    }

    let testing = toDos.filter(t => t['category'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let i = 0; i < testing.length; i++) {
    const element = testing[i];
    document.getElementById('testing').innerHTML += generateToDoHTML(element);
        
    }


    let done = toDos.filter(t => t['category'] == 'done');

    document.getElementById('done').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
    const element = done[i];
    document.getElementById('done').innerHTML += generateToDoHTML(element);
        
    }

}

function generateToDoHTML(element){

    return `<div draggable="true" onclick="openContainer(${element['id']})" ondragstart="startdragging(${element['id']})" class="taskContainer">${element['title']}</div>
            <div id="openContainer" class="openContainer d-none">
            <div class="infoBox">
            <div class="headlinebox">
            <div class="headline"><h2>${element['title']}</h2></div>
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

    toDos[currentDraggedElement]['category'] = category;
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