
async function initBacklog() {
    setQueryStringParameter('currentUser', currentUser['username']);
    await init();
    updateBacklog();
}

function updateBacklog() {
    let backlogContent = document.getElementById('backlogContent');

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        for (let j = 0; j < task['assigned_users'].length; j++) {
            const user = task['assigned_users'][j];
            let taskState = task['state'];
            taskState = taskState + 'Color';

            backlogContent.innerHTML += renderBacklogRows(task, user, taskState);
        }
    }
}


/**
 * 
 * @param {json} task  separate tasks
 * @param {string} user each user of separate task 
 * @param {string} taskState  the state attribute of every task
 * @returns 
 */
function renderBacklogRows(task, user, taskState) {

    return `<div class="backlogRows ${taskState}">
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