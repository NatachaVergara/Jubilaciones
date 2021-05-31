// console.log("Estoy linkeado");
/**Obtengo los datos de entrada del formulario */







let botonCalcular = document.querySelector(".bCalcular");

botonCalcular.addEventListener("click", () => {
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = parseInt(document.querySelector("#edad").value);
    let aportes = parseInt(document.querySelector("#aportes").value);
    let genero = document.querySelector("#genero").value.toUpperCase();
    let resto = 0;
    switch (genero) {
        case "F":
            if (genero == "F" && edad <= 59) {
                infoFinal.textContent = `${nombre} ${apellido} usted es menor a 60 años por lo que todavía no está en edad de jubilarse. Gracias por su tiempo`
            }
            else {
                if (genero == "F" && edad >= 59 && aportes <= 29) {
                    resto = 30 - aportes;
                    infoFinal.textContent = `${nombre} ${apellido} usted ya tiene la edad mínima pero le faltan ${resto} años para poder comenzar el proceso jubilación, comuniquese a la mesa de entrada para ver como puede continuar con el proceso. Gracias por su tiempo`
                }
                else {
                    infoFinal.textContent = `${nombre} ${apellido} : El sistema de jubilación le da la bienvenida, usted ya puede comenzar con el proceso de jubilación`

                }
            }//Fin del proceso de mujeres
            break;
        case "M":
            if (genero == "M" && edad <= 64) {
                infoFinal.textContent = `${nombre} ${apellido}  usted es menor a 65 años por lo que todavía no está en edad de jubilarse. Gracias por su tiempo`
            }
            else {
                if (genero == "M" && edad >= 65 && aportes <= 29) {
                    resto = 30 - aportes;
                    infoFinal.textContent = `${nombre} ${apellido} usted ya tiene la edad mínima para jubilarse pero le faltan  ${resto} años de aporte para poder comenzar el proceso de jubilación, comuniquese con la mesa de entrada para ver como puede continuar con el proceso. Gracias por su tiempo`
                }
                else {
                    infoFinal.textContent = `${nombre} ${apellido} : El sistema de jubilacion le da la bienvenida, usted ya puede comenzar el proceso de jubilación`
                }
            }//Fin del proceso hombres
            break;
        default:
            infoFinal.textContent = `${nombre} ${apellido} Revise la información. Gracias`
            

    }/**Fin del switch */

   
}//fin de la funcion


); /**Fin del proceso */


/**Traigo los datos del los labels para avisar errores al usuario */





