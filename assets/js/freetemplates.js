// Toggle showMenu class on arrow click
const arrows = document.querySelectorAll(".arrow");
for (const arrow of arrows) {
  arrow.addEventListener("click", (e) => {
    const arrowParent = e.target.parentElement.parentElement; // Selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

// Toggle sidebar close class on sidebarBtn click
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// Display user profile pic and name
const todoRegister = JSON.parse(localStorage.getItem("todoRegister"));
const todoLogin = JSON.parse(localStorage.getItem("todoLogin"));
const findUser = todoRegister.find((user) => user.email === todoLogin);
document.getElementById("profile_pic").src = findUser["profile_pic"];
document.getElementById("profile_name").innerText = findUser["name"];

// Open add task div
const addtask = document.getElementById("addtask");
addtask.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("popupOverlay").style.display = "block";
});

// Close task popup
const closetask = document.getElementById("closePopup");
closetask.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("popupOverlay").style.display = "none";
});

// Handle adding new tasks
const addnewtask = document.getElementById("form");
addnewtask.addEventListener("submit", (event) => {
  event.preventDefault();
  const freetemplates = JSON.parse(localStorage.getItem("freetemplates")) || [];

  // Create and store task object
  const taskname = document.getElementById("taskname").value;
  // ... (other task properties)
  const todoID = Date.now();
  const dateposted = moment().format("MMMM Do YYYY, h:mm:ss a");
  const todoObj = {
    taskname,
    // ... (other task properties)
    todoID,
    dateposted,
  };

  // Check due date validity
  const selectedDate = new Date(taskdue);
  const newDate = new Date();

  if (selectedDate >= newDate) {
    freetemplates.push(todoObj);
    localStorage.setItem("freetemplates", JSON.stringify(freetemplates));
    alert("Task Added Successfully");
  } else {
    alert("Task DueDate Must be Greater than or Equal to Today's Date");
  }
});

// Handle logout
const logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("submit", (event) => {
  event.preventDefault();
  const msg = confirm("Are you sure you want to log out?");

  if (msg) {
    localStorage.removeItem("todoLogin");
    window.open("../index.html", "_self");
  }
});

// Search functionality
const searchbar = document.getElementById("search");
searchbar.addEventListener("input", () => {
  const cards = document.getElementsByClassName("tododiv");
  for (const element of cards) {
    if (
      element.innerText.toLowerCase().includes(searchbar.value.toLowerCase())
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});
