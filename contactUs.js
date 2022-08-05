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

//

let sendButton = document.getElementsByClassName("button-contact")[0];
let error = document.getElementsByClassName("error-message")[0];
 
sendButton.onclick = (e) => {
  e.preventDefault();
  console.log("cilcked");
  let name = document.getElementsByTagName("input")[0].value;
  let email = document.getElementsByTagName("input")[1].value;
  let phone = document.getElementsByTagName("input")[2].value;
  let message = document.getElementsByTagName("textarea")[0].value;

  if (!name || !email || !phone ) {
    error.innerHTML = `Formulario incompleto: <br> Has de rellenar todos los campos que son obligatorios para poder enviar el formulario! (*).`;
    console.log("error 02: inputs obligatorios vacios");
  } else {
    console.log("Consulta enviada con exito!!");
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
    fetch("https://jsonplaceholder.typicode.com/posts", { 
      method: "POST",
      headers: {
        Accept: "text/plain, application/json, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: name, body: message, userId: phone }),
    })
    .then((response) => response.json())
    .then((dataDeFormulario) => {
      console.log(dataDeFormulario);
    });
    name = "";
    email = "";
    phone = "";
    message = "";
    error.innerHTML = `Consulta enviada con exito!<br>Recibira una respuesta en los proximos dias.`;
  }
    
  }