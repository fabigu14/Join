let toDo = [{

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

let currentDraggedElement;

function updateHTML(){

    let open = toDo.filter(t => t['category'] == 'open');

    document.getElementById('open').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
        const element = open[i];
        document.getElementById('open').innerHTML += generateToDoHTML(element);
        
    }

    let inProgress = toDo.filter(t => t['category'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('inProgress').innerHTML += generateToDoHTML(element);
        
    }

    let testing = toDo.filter(t => t['category'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        document.getElementById('testing').innerHTML += generateToDoHTML(element);
        
    }


    let closed = toDo.filter(t => t['category'] == 'closed');

    document.getElementById('closed').innerHTML = '';

    for (let i = 0; i < closed.length; i++) {
        const element = closed[i];
        document.getElementById('closed').innerHTML += generateToDoHTML(element);
        
    }

}

function startdragging(id){

    currentDraggedElement = id;

}

function generateToDoHTML(element){

    return `<div draggable="true" ondragstart="startdragging(${element['id']})" class="taskContainer">${element['title']}</div>`;

}


function allowDrop(ev) {
    ev.preventDefault();
  

}

function moveTo(category){

    toDo[currentDraggedElement]['category'] = category;
    updateHTML();

}
