
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

/**
 * that clears the hole page
 */
function clearBacklog() {
    let backlogContent = document.getElementById('backlogContent');
    backlogContent.innerHTML = '';
}

/**
 * @param {json} task - every separate task json of the tasks array
 * @param {json} user - users who were assigned to the task
 * @returns 
 */
function renderBacklogRows(task, user) {
    return `<div class="backlogRows">
                    <div class="backlogUser">
                        <img class="blUserImg" src="${user['img']}">
                        <div class="blUserData">
                            <span class="wrap-W">${user['name']}</span>
                            <a class="wrap-W" href="#">${user['email']}</a>
                        </div>
                    </div>
                        <div class="blCategories">
                            <span class="blCategory wrap-W">${task['category_value']}</span>
                        </div>
                        <div class="blDetails">
                            <span class="wrap-W">${task['description']}</span>
                        </div>
                </div>`;
}

/**
 * assign an id to the every separate task-row 
 */
function setIdToRows() {
    let rows = document.getElementsByClassName('backlogRows');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        row.setAttribute('id', 'backlogRow_'+ i);
    }
}

/**
 * assign an id Attribute to the spans with the Category of the Tasks
 */
function setIdToCategory() {
    let blCategories = document.getElementsByClassName('blCategory');
    for (let i = 0; i < blCategories.length; i++) {
        const blCategory = blCategories[i];
        blCategory.setAttribute('id', 'backlogCategory_' + i);
        checkCategory(i);
    }
}

let category = {
    'Development': 'development-bl',
    'Design': 'design-bl',
    'Testing': 'testing-bl',
    'Management': 'management-bl'
};

/**
 * 
 * @param {int} i - id of the current row 
 */
function checkCategory(i) {
    let blCategory = document.getElementById('backlogCategory_' + i).textContent;
    drawBorder(category[blCategory], i);
}

/**
 * @param {string} result - the content of the category element
 * @param {int} i - the number of the id from the rows
 */
function drawBorder(result, i) {
    let backlogRows = document.getElementById('backlogRow_' + i);
    backlogRows.classList.add(result);
}


/**
 * 
 * @param {int} i - id of the spans with the Category Name
 */
// function checkCategory(i) {
//     let blCategory = document.getElementById('backlogCategory_' + i).textContent;

//     switch (blCategory) {
//         case 'Development':
//             result = 'development-bl';
//             break;
//         case 'Design':
//             result = 'design-bl';
//             break;
//         case 'Testing':
//             result = 'testing-bl';
//             break;
//         case 'Management':
//             result = 'management-bl';
//             break;
//         default:
//             result = 'default-bl'; 
//     }

//     drawBorder(result, i);
// }