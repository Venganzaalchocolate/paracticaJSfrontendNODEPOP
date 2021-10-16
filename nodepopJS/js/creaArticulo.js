
import ControladorCreaArticulo from "./controladores/ControladorCreaArticulo.js"
import ControladorMensaje from "./controladores/ControladorMensajes.js"


window.addEventListener('DOMContentLoaded', ()=>{

    // Selecciono el form del html
    const form = document.querySelector('form')

    // Creo el controlador de creaArticulo
    new ControladorCreaArticulo(form)

    // Seleccionamos el nodo para mostrar mensajes de mensajes
    const mensajes = document.querySelector('.mensaje')

    // Crear una instancia de ErrorMessageController
    new ControladorMensaje(mensajes)


} )