const titulo = document.querySelector("#titulo");

const nombre =prompt("Ingresa tu nombre");
titulo.textContent = `Hola,${nombre}`;
titulo.style="color:green";

function siguientepagina2(){
    window.location.href = "pagina2.html" ;
 }
 