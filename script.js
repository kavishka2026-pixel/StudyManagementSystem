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
        let gpa = points; // මෙය සරල කළ අනුවාදයකි (Weighted average ලෙස පසුව සැකසිය හැක)
        document.getElementById('gpaResult').innerText = gpa.toFixed(2);
    }
}