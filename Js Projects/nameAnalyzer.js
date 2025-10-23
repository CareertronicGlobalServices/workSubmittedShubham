

const nameInput= document.getElementById('input-name');
const nameButton= document.getElementById('name-button');
const searchInput= document.getElementById('input-search');
const searchButton= document.getElementById('search-button');
const aButton= document.getElementById('Alphabetically-button')
const reverseButton = document.getElementById('reverse-button');
const removeDuplicate= document.getElementById('removeDuplicatesBtn')
const clearButton= document.getElementById('clear-button');
const countDisplay = document.getElementById('countDisplay');
const longestName = document.getElementById('longest-name');
const shortestName= document.getElementById('shortest-name')
const letter = document.getElementById('filter.input');
const countBtn= document.getElementById('count-btn');

let students=[]; //for collecting student name


nameButton.addEventListener('click', addStu);
function addStu() {
            const name = nameInput.value.trim();
            
            if (name === '') {
                alert('Please enter a student name');
                return;
            }
            
            students.push(name);
            nameInput.value = '';
            updateStudentList()
            longShort()
}

nameInput.addEventListener('keypress', function(e){ //keypress is similar like click but its happen in keyword button press
     if(e.key=== 'Enter')addStu();
});


function updateStudentList() {
    studentList.innerHTML = '';
    
    if (students.length === 0) {
        studentList.innerHTML = '<div class="student-item">No students added yet</div>';
        countDisplay.textContent = 'Total Students: 0';
        return;
    }
    
    students.forEach((student, index) => {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        studentItem.innerHTML = `
            <span>${index + 1}. ${student}</span>
        `;
        studentList.appendChild(studentItem);
    });
    
    countDisplay.textContent = `Total Students: ${students.length}`;
}

searchInput.oninput= function(){
    let searchStudent = searchInput.value.trim()
    let searchStudent2= students.filter((gulshan)=>gulshan.includes(searchStudent))
    console.log(searchStudent2);

    studentList.innerHTML ='';
    searchStudent2.forEach((element,index )=> { 
        let newDiv = document.createElement("div")
        newDiv.className ="student-item"
        newDiv.innerHTML = `<span>${index + 1}. ${element}</span>`

        studentList.append(newDiv)
    });
}

aButton.addEventListener('click', alphaShort);
function alphaShort() {
    students.sort(); //short is used for arranging in Alphabetically
    updateStudentList();
}


reverseButton.addEventListener('click', revStu);
function revStu() {
    students.reverse();
    updateStudentList();
}

removeDuplicate.addEventListener('click', removeDupli);
function removeDupli() {
    students = [...new Set(students)];
    console.log(students    );
    updateStudentList();
    
}

clearButton.addEventListener('click', clear);
function clear(){
    alert('Are you sure want to clear all Student name')
    students=[];
    updateStudentList();
}

function longShort() {
  if (students.length === 0) {
    longestName = '-';
    shortestName = '-';
    return;
  }

  let longest = students.reduce((a, b) => b.length > a.length ? b : a);
  let shortest = students.reduce((a, b) => b.length < a.length ? b : a);
  longestName.innerHTML = longest;
  shortestName.innerHTML = shortest;
}

function countname(){
     const count = students.filter((name) =>( 
                name.toUpperCase().startsWith(letter))).length;
    countBtn.innerHTML =`${count}`;
};
  