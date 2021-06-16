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
    'title': 'Test2',
    'category': 'closed'

}];

function updateHTML(){

    let open = toDo.filter(t => t['category'] == 'open');

    document.getElementById('open').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
        const element = open[i];
        document.getElementById('open').innerHTML += generateToDoHTML(element);
        
    }

    let closed = tasks.filter(t => t['category'] == 'closed');

    document.getElementById('closed').innerHTML = '';

    for (let i = 0; index < closed.length; i++) {
        const element = closed[i];
        document.getElementById('closed').innerHTML += generateToDoHTML(element);
        
    }

}

function generateToDoHTML(element){

    return `<div class="taskContainer">${element['title']}</div>`;


}