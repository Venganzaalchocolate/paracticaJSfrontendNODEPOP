import ControladorBotonServidor from "./controladores/ControladorBotonRespuestaHTTP.js"


// este controlador creo que era innecesario, me di cuenta más tarde. 
window.addEventListener('DOMContentLoaded', ()=>{
    const boton = document.querySelector('button')

    const controladorBoton=  new ControladorBotonServidor(boton)

    controladorBoton.escuchaEventos()
})