const tasks = [
    {
        name: 'Wash Car',
        cost: 10,
    },

    {
        name: 'Mow Lawn',
        cost: 20,
    },

    {
        name: 'Pull Weeds',
        cost: 30,
    }
];

const gigBtns = [
    document.querySelector('.gig-1'),
    document.querySelector('.gig-2'),
    document.querySelector('.gig-3'),
];

const tasksContainer = document.querySelector('.tasks-container');
const sendBtn = document.querySelector('.send-invoice');
const tasksUl = document.querySelector('.tasks-list');
const tasksCostTotal = document.querySelector('.total-amount');
let taskCostSum = 0;

function renderTaskCost() {
    tasksCostTotal.textContent = taskCostSum;
}

function renderButtons() {
    for (let i = 0; i < gigBtns.length; i++) {
        gigBtns[i].textContent = `${tasks[i].name}: $${tasks[i].cost}`
    }
}

if (tasks) {
    renderButtons();
}

for (let i = 0; i < gigBtns.length; i++) {
    gigBtns[i].addEventListener("click", function() {
        tasksUl.innerHTML += `<li>${tasks[i].name} $${tasks[i].cost}</li>`
        taskCostSum += tasks[i].cost;
        renderTaskCost();
        gigBtns[i].disabled = true;
        gigBtns[i].textContent = "Added!"
    });
}

sendBtn.addEventListener("click", function() {
    tasksUl.innerHTML="";
    taskCostSum = 0;
    renderTaskCost();
    for (let i = 0; i < gigBtns.length; i++) {
        gigBtns[i].disabled = false;
    }
});