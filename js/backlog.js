function updateBacklog() {
    clearBacklog();

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
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
                        <div id="blCategory_${i}" class="blCategories">${task['category']}</div>
                        <div id="blDetail_${i}" class="blDetails">${task['description']}</div>
                </div>`;
}

function checkCategory(i) {
    let blCategory = tasks[i]['category'];

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