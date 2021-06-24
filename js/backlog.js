
async function initBacklog() {
    await init();
    updateBacklog();
}

function updateBacklog() {
    clearBacklog();

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        for (let j = 0; j < task['assigned_users'].length; j++) {
            const user = task['assigned_users'][j];
            backlogContent.innerHTML += renderBacklogRows(task, user);
            setIdToRows();
            setIdToCategory();
        }
    }
}

function clearBacklog() {
    let backlogContent = document.getElementById('backlogContent');
    backlogContent.innerHTML = '';
}

function renderBacklogRows(task, user) {
    return `<div class="backlogRows">
                    <div class="backlogUser">
                        <img class="blUserImg" src="../${user['img']}">
                        <div class="blUserData">
                            <span>${user['name']}</span>
                            <a href="#">${user['email']}</a>
                        </div>
                    </div>
                        <div class="blCategories"><span class="hiddenText">Category:</span><span class="blCategory">${task['category_value']}</span></div>
                        <div class="blDetails"><span class="hiddenText">Description:</span><span>${task['description']}</span></div>
                </div>`;
}

function setIdToRows() {
    let rows = document.getElementsByClassName('backlogRows');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        row.setAttribute('id', 'backlogRow_'+ i);
    }
}

function setIdToCategory() {
    let blCategories = document.getElementsByClassName('blCategory');
    for (let i = 0; i < blCategories.length; i++) {
        const blCategory = blCategories[i];
        blCategory.setAttribute('id', 'backlogCategory_' + i);
        checkCategory(i);
    }
}

function checkCategory(i) {
    let blCategory = document.getElementById('backlogCategory_' + i).textContent;

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
    let backlogRows = document.getElementById('backlogRow_' + i);
    backlogRows.classList.add(result);
}