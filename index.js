
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

/// Accediendo a los datos de la API

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      const idProject = project.id;
      const titleProject = project.title;
      const textProject = project.body;
      var projects = document.querySelectorAll("container-project");

      projects.forEach((project) => {
        project.innerHTML = `
        <img src="/images/${idProject}.jpg" alt="vectorify" class="project-img">
        <div>
          <h4>${titleProject}</h4>
          <p>${titleProject}</p>
          <a href="singleProject.html/${idProject}">Learn More</a>
        </div>            
        `;
      });
    });
  })
  .catch((err) => console.log(err));

/// Accediendo a los datos de la API

