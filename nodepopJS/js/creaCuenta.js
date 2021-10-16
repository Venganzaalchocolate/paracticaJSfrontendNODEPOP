import ControladorCreaCuenta from "./controladores/ControladorCreaCuenta.js"
import ControladorMensaje from "./controladores/ControladorMensajes.js"


window.addEventListener('DOMContentLoaded', ()=>{

    // Selecciono el form del html
    const form = document.querySelector('form')

    // Creo el controlador de creaCuenta
    new ControladorCreaCuenta(form)

    // Seleccionamos el nodo para mostrar mensajes de error
    const mensajes = document.querySelector('.mensaje')

    // Crear una instancia de ErrorMessageController
    new ControladorMensaje(mensajes)


} )