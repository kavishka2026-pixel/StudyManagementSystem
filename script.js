// 1. Assignment Tracker Logic
function addAssignment() {
    let name = document.getElementById('taskName').value;
    let date = document.getElementById('dueDate').value;
    
    if(name && date) {
        let deadline = new Date(date);
        let today = new Date();
        let diff = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
        
        let list = document.getElementById('assignmentList');
        list.innerHTML += `<li>${name} - <b>දින ${diff} ක් ඉතිරිව ඇත</b></li>`;
    }
}

// 2. Pomodoro Timer Logic
let timer;
function startTimer() {
    let timeLeft = 25 * 60;
    timer = setInterval(() => {
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        document.getElementById('timerDisplay').innerText = 
            `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if(timeLeft <= 0) clearInterval(timer);
        timeLeft--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('timerDisplay').innerText = "25:00";
}

// 3. GPA Calculator Logic
function calculateGPA() {
    let credits = parseFloat(document.getElementById('credits').value);
    let points = parseFloat(document.getElementById('gradePoint').value);
    if(credits && points) {
        let gpa = points;
        document.getElementById('gpaResult').innerText = gpa.toFixed(2);
    }
}
// Assignment එකක් Save කිරීම (Local Storage)
function addAssignment() {
    let name = document.getElementById('taskName').value;
    let date = document.getElementById('dueDate').value;

    if (name && date) {
        let task = { name: name, date: date };
        
        // කලින් තිබුණ දත්ත ලබා ගැනීම
        let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
        tasks.push(task);
        
        // නැවත Save කිරීම
        localStorage.setItem('myTasks', JSON.stringify(tasks));
        
        displayTasks(); // ලිස්ට් එක Refresh කිරීම
    }
}

// Phone එකේ Screen එකේ පෙන්වීම
function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    let list = document.getElementById('assignmentList');
    list.innerHTML = "";
    
    tasks.forEach(task => {
        let diff = Math.ceil((new Date(task.date) - new Date()) / (1000 * 60 * 60 * 24));
        list.innerHTML += `<div class="task-card">
            <strong>${task.name}</strong> - තව දින ${diff} යි
        </div>`;
    });
}

// App එක Open කරන විටම දත්ත පෙන්වන්න
window.onload = displayTasks;
