let taskss = [{
    'name': 'Darrin S.Jones',
    'email': 'Darrin@gmail.com',
    'img': '../img/fabi.jpg',
    'title': 'test1',
    'due_date': '19.06.2021',
    'category': 'Marketing',
    'urgency': 'important',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit.'
},
{
    'name': 'Darrin S.Jones',
    'email': 'Darrin@gmail.com',
    'img': '../img/fabi.jpg',
    'title': 'test1',
    'due_date': '19.06.2021',
    'category': 'Product',
    'urgency': 'important',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit.'
},
{
    'name': 'Darrin S.Jones',
    'email': 'Darrin@gmail.com',
    'img': '../img/fabi.jpg',
    'title': 'test1',
    'due_date': '19.06.2021',
    'category': 'Product',
    'urgency': 'important',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit.'
},
{
    'name': 'Darrin S.Jones',
    'email': 'Darrin@gmail.com',
    'img': '../img/fabi.jpg',
    'title': 'test1',
    'due_date': '19.06.2021',
    'category': 'Sale',
    'urgency': 'important',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit.'
},
{
    'name': 'Darrin S.Jones',
    'email': 'Darrin@gmail.com',
    'img': '../img/fabi.jpg',
    'title': 'test1',
    'due_date': '19.06.2021',
    'category': 'Sale',
    'urgency': 'important',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit.'
},
{
    'name': 'Darrin S.Jones',
    'email': 'Darrin@gmail.com',
    'img': '../img/fabi.jpg',
    'title': 'test1',
    'due_date': '19.06.2021',
    'category': '',
    'urgency': 'important',
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit.'
}];

function updateBacklog() {
    clearBacklog();

    for (let i = 0; i < taskss.length; i++) {
        const task = taskss[i];
        backlogContent.innerHTML += renderBacklogRows(task, i);
        
        checkCategory(i);
    }
}

function clearBacklog() {
    let backlogContent = document.getElementById('backlogContent');
    backlogContent.innerHTML = '';
}

function renderBacklogRows(task, i) {
    return     `<div id="backlogRows_${i}" class="backlogRows">
                    <div class="backlogUser">
                        <img id="blUserImg_${i}" class="blUserImg" src="${task['img']}">
                        <div class="blUserData">
                            <span id="blUserName${i}">${task['name']}</span>
                            <a id="blUserEmail_${i}" href="#">${task['email']}</a>
                        </div>
                    </div>
                        <div id="blCategory_${i}" class="blCategories">${task['category']}</div>
                        <div id="blDetail_${i}" class="blDetails">${task['description']}</div>
                </div>`;
}

function checkCategory(i) {
    let blCategory = taskss[i]['category'];

    switch(blCategory) {
        case 'Marketing':
            result = 'marketing-bl';
            break;
        case 'Product':
            result = 'product-bl';
            break;
        case 'Sale':
            result = 'sale-bl';
            break;
        default:
            result = 'default-bl';
    }
    drawBorder(result, i);
}

function drawBorder(result, i) {
    let backlogRows = document.getElementById('backlogRows_' + i);
    backlogRows.classList.add(result);
}