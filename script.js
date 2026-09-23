const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen");

sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    localStorage.setItem("theme", element.classList.contains("dark-mode") ? "dark-mode" : "");
}

//experimental

//functions
function displaySkill(){
    return "HTML";
}

let greeting = displaySkill();
document.getElementById("demo").innerHTML = greeting;


//+ concatenate
const birthDate = new Date("2003-02-04");
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
}

const age = calculateAge(birthDate);
document.getElementById("ageDemo").innerHTML = "I am " + age + " years old.";


//names and recall

function displayName(nameInput) {
    var nameInput = document.getElementById("userName").value;
    document.getElementById("nameDemo").innerHTML = "Hello " + nameInput + "!";
}

function displayNumber(phoneInput) {
    var phoneInput = document.getElementById("phoneNumber").value;
    document.getElementById("numberDemo").innerHTML = typeof "phoneNumber";
    
}

var testNum = Number("18") + 1
document.getElementById("dataTypeDemo").innerHTML = testNum + typeof "testNum";