let users = [];
let tasks = [];



async function init() {
    loadNav();
    setURL('http://gruppe-83.developerakademie.com/smallest_backend_ever');
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    

}

function loadNav() {
    $.get("navbar.html", function (data) {
        $("#nav_placeholder").html(data);
    })
}

function saveTasksToServer() {
    backend.setItem('tasks', JSON.stringify(tasks));
}

function saveUsersToServer() {
    backend.setItem('users', JSON.stringify(users));
}

function clearInput(inputIds){           
    inputIds.forEach(id => {
       let currentField =  document.getElementById(id);
       currentField.value = '';
    });
}


function setInputValues(inputFields, JsonToFill) {
    inputFields.forEach(inputField => {
        let currentField = document.getElementById(inputField);
        let inputValue = currentField.value;
        JsonToFill[inputField] = inputValue;
    });
}

function checkForInput(inputFields) {
    let inputsFilled = checkInputValues(inputFields);
    if (inputsFilled) {
        return true
    } else {
        return false;
    }
}

function checkInputValues(inputFields) {
    let inputsFilled;
    for (let i = 0; i < inputFields.length; i++) {
        const inputField = inputFields[i];
        let currentField = document.getElementById(inputField);
        let inputValue = currentField.value;
        if (inputValue == '') {
        
            inputsFilled = false;
            break;
        }
        else {
            inputsFilled = true;
        }
    } 
    return inputsFilled;
}