import ControladorLoginCuenta from "./controladores/ControladorLoginCuenta.js"
import ControladorMensaje from "./controladores/ControladorMensajes.js"
import PubSub from "../js/servicios/PubSub.js"

window.addEventListener('DOMContentLoaded', ()=>{

    // Selecciono el form del html
    const form = document.querySelector('form')

    // Creo el controlador de creaCuenta
    new ControladorLoginCuenta(form)

    // Seleccionamos el nodo para mostrar mensajes de error
    const mensajes = document.querySelector('.mensaje')

    // Crear una instancia de ErrorMessageController
    new ControladorMensaje(mensajes)


} )