import ControladorMensaje from "./controladores/ControladorMensajes.js"
import ControladorModificaArticulos from "./controladores/ControladorModificaArticulos.js"



window.addEventListener('DOMContentLoaded', ()=>{

    // Seleccionamos el nodo para mostrar mensajes de error
    const mensaje = document.querySelector('.mensaje')

    // creo una instancia del controlador de errores
    new ControladorMensaje(mensaje)

    // obtendo el id del articulo con URLSearchParams
    // La API URLSearchParams proporciona una forma de obtener datos en los parámetros de una URL. Consta de un constructor y varios métodos para trabajar.
    const id = new URLSearchParams(window.location.search).get('id')

    // Selecciono la section del html
    const section = document.querySelector('section')

    // Creo el controlador que gestionará el articulo donde se podrá ver el detalle y te dará la opción de borrar
    new ControladorModificaArticulos(section, id)




})