import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"


export default class {

    constructor(elemento) {
        this.elemento=elemento

    }

    async pintaBotones() {

        try {
            // Compruebo que haya iniciado sesión 
            const estaLogin = await BaseDatos.isAuthenticed()

            //si está logueado me muestras los botones para crear y modificar (por si me daba tiempo)
            if (estaLogin) {
                this.elemento.forEach(element => {
                    // Se cambia la propiedad visibility del css y lo pongo visible
                    // otra opción es display:hidden-display:loquesea, pero con visibility el elemento esta presente pero invisible 
                    element.setAttribute("style", "visibility:visible;")
                });
                // cambio de color el botón login de rojo a verde (se usa el mismo botoón para iniciar y cerrar sesión)
                document.querySelector(".fa-sign-in-alt").setAttribute("style", "color:rgb(0, 156, 140)")
            }
            
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        }
    }

    



}