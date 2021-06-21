let toDos = [{

    'id': 0,
    'title': 'Test',
    'category': 'open'

},{

    'id': 1,
    'title': 'Test1',
    'category': 'open'

},{

    'id': 2,
    'title': 'Test2',
    'category': 'open'

}];

let currentDraggedElement;

function updateHTML(){

    let open = toDos.filter(t => t['category'] == 'open');

    document.getElementById('open').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
    const element = open[i];
    document.getElementById('open').innerHTML += generateToDoHTML(element);
        
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

    toDos[currentDraggedElement]['category'] = category;
    updateHTML();

}

function openContainer(){

    document.getElementById('openContainer').classList.remove('d-none');
        
    
    }

function closeContainer(){

    document.getElementById('openContainer').classList.add('d-none');
}