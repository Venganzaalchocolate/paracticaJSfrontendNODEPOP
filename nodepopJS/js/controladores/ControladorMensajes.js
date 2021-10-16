import { mensajesError } from "../mensajes.js"
import PubSub from "../servicios/PubSub.js"
import { esquemaError } from "../views.js"


export default class ControladorMensaje{

    constructor(elemento){
        this.elemento=elemento
        PubSub.subscribe(PubSub.events.SHOW_ERROR, error => {
            this.pintarError(error)
        })
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message => {
            this.exito(message)
        })

        
    }
    // muestra el error (el esquema esta en views)
    pintarError(errores){
        this.elemento.innerHTML=esquemaError(mensajesError(errores))
        
    }

    // muestra el éxito (en firefox no va bien y no se porque)
    exito(message) {
        window.alert(message)
        window.location.href = "index.html"
    }

}