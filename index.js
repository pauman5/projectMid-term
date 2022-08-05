
// Menu hamburguesa

const menu = document.querySelector(".hamburger-menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    console.log("Button hamburger clicked");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.classList.remove("openedMenu");
  } else {
    menu.classList.add("showMenu");
    menuIcon.classList.add("openedMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

// Accediendo a los datos de la API

function dataApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let projectsData = "";
      data.forEach((project) => {
        if (project.id <= 3) {
          projectsData += `
            <div class="container-project">
              <img src="/images/${project.id}.jpg" alt="simplify" class="project-img">
              <div>
                <h4>${project.title}</h4>
                <p>${project.title}</p>
                <a href="singleProject.html">Learn More</a>
              </div>
            </div>           
            `;
        };
      });
      document.getElementById("projectsHome").innerHTML = projectsData;
    });
}

dataApi();