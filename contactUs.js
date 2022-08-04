let sendButton = document.getElementsByClassName("button-contact")[0];
let error = document.getElementsByClassName("error-message")[0];

console.log(sendButton);
 
sendButton.onclick = (e) => {
  e.preventDefault();
  console.log("cilcked");
  let name = document.getElementsByTagName("input")[0];
  let email = document.getElementsByTagName("input")[1];
  let phone = document.getElementsByTagName("input")[2];
  let message = document.getElementsByTagName("input")[3];

  if (!name.value || !email.value || !phone.value ) {
    error.innerHTML = `Formulario incompleto: <br> Has de rellenar todos los campos que son obligatorios para poder enviar el formulario! (*).`;
    console.log("error 02: inputs obligatorios vacios");
  } else {
    console.log("Consulta enviada con exito!!");
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(message);
    error.innerHTML = `Consulta enviada con exito! Recibira una respuesta en los proximos dias.`;
    fetch 
  }
}
