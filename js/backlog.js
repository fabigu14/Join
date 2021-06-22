let taskss = [{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Development',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Management',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Design',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Testing',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Development',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Development',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Development',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Development',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Development',
    'description': 'Lorem Ipsum Dolor.'
},
{
    'name': 'Mustafa',
    'email': 'mustafaguer@yahoo.de',
    'img': '../img/taxi.jpg',
    'category_value': 'Development',
    'description': 'Lorem Ipsum Dolor.'
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
    return `<div id="backlogRows_${i}" class="backlogRows">
                    <div class="backlogUser">
                        <img id="blUserImg_${i}" class="blUserImg" src="${task['img']}">
                        <div class="blUserData">
                            <span id="blUserName${i}">${task['name']}</span>
                            <a id="blUserEmail_${i}" href="#">${task['email']}</a>
                        </div>
                    </div>
                        <div id="blCategory_${i}" class="blCategories"><span class="hiddenText">Category:</span><span>${task['category_value']}</span></div>
                        <div id="blDetail_${i}" class="blDetails"><span class="hiddenText">Description:</span><span>${task['description']}</span></div>
                </div>`;
}

function checkCategory(i) {
    let blCategory = taskss[i]['category_value'];

    switch (blCategory) {
        case 'Development':
            result = 'development-bl';
            break;
        case 'Design':
            result = 'design-bl';
            break;
        case 'Testing':
            result = 'testing-bl';
            break;
        case 'Management':
            result = 'management-bl';
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