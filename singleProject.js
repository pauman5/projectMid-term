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

// Api

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


function singleProject(projectId) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            let project = data[projectId];
            let project_data =  ` 
            <div>
                <h1 class="project-title">${project.title}</h1>
                <div>
                    <p class="project-category">${project.title}</p>
                    <div>
                        <p>Completed on</p>
                        <p class="project-date">${project.id}</p>
                    </div>
                </div>
                <picture alt="project picture"></picture>
                <p class="project-text">${project.body}</p>
            </div>
            `;
            document.getElementById("project").innerHTML = project_data;
            document.getElementsByTagName("picture")[0].style.backgroundImage = `url("/images/${project.id}.jpg")`;
        });
};
  
singleProject(4);