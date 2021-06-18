inputFields = ['title', 'due_date', 'category', 'urgency', 'description'];
task = {}
usersAssigned = [];

function createTask(){
    inputFields.forEach(inputField => {
       let currentField = document.getElementById(inputField);
       let inputValue = currentField.value;
       task[inputField] = inputValue;
    });
    addToTasks();
    clearInput();
}

function addToTasks(){
    tasks.push(task);
}

function clearInput(){
    inputFields.forEach(inputField => {
        let currentField = document.getElementById(inputField);
        currentField.value = '';
     });
     task = {};
}