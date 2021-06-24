
async function initBacklog() {
    await init();
    updateBacklog();
}

function clearBacklog() {
    let backlogContent = document.getElementById('backlogContent');
    backlogContent.innerHTML = '';
}

function updateBacklog() {
    clearBacklog();

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        for (let j = 0; j < task['assigned_users'].length; j++) {
            const user = task['assigned_users'][j];
            backlogContent.innerHTML += renderBacklogRows(task, user, i);
            checkCategory(i);
        }
    }
}

function renderBacklogRows(task, user, i) {
    return `<div id="backlogRows_${i}" class="backlogRows">
                    <div class="backlogUser">
                        <img id="blUserImg_${i}" class="blUserImg" src="../${user['img']}">
                        <div class="blUserData">
                            <span id="blUserName${i}">${user['name']}</span>
                            <a id="blUserEmail_${i}" href="#">${user['email']}</a>
                        </div>
                    </div>
                        <div id="blCategory_${i}" class="blCategories"><span class="hiddenText">Category:</span><span>${task['category_value']}</span></div>
                        <div id="blDetail_${i}" class="blDetails"><span class="hiddenText">Description:</span><span>${task['description']}</span></div>
                </div>`;
}

function checkCategory(i) {
    let blCategory = tasks[i]['category_value'];

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