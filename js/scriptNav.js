// console.log("Estoy linkeado")
/** Traigo los elementos del html al DOM*/
const hamburguesa = document.querySelector("#hamburguesa");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");
 
/**Creo un evento click para hacer funcional el Icono del menú */
hamburguesa.addEventListener("click", () =>{
    /**Links */
    navLinks.classList.toggle("open");

    links.forEach(link => {
        link.classList.toggle("fade");
    });


    /**Animacion del icono hamburguesa */
    hamburguesa.classList.toggle("toggle")});















