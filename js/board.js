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
    update('toDo', toDo);
    let inProgress = toDos.filter(t => t['category'] == 'inProgress');
    update('inProgress', inProgress);
    let testing = toDos.filter(t => t['category'] == 'testing');
    update('testing', testing);
    let done = toDos.filter(t => t['category'] == 'done');
    update('done', done);

}

function update(containerID, array){

    document.getElementById(containerID).innerHTML = '';

    for (let i = 0; i < array.length; i++) {
    const element = array[i];
    document.getElementById(containerID).innerHTML += generateToDoHTML(element);
        
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
            <div class="descriptionContainer">${element['title']}</div>
            <div onclick="deletetasks()" class="deleteButton">
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

function deletetasks(id){

    toDos.splice(id);
    updateHTML();

}