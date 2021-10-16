import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"


export default class {

    constructor(elemento) {
        this.elemento=elemento
        this.iniciaSesion()
    }

    iniciaSesion(){
        
        // cuando se envie el formulario
        this.elemento.addEventListener('submit', async function(evento){

            //evitamos el comportamiento por defecto (que el formulario se envie) para poder comprobar antes si es válido
            evento.preventDefault()

            // comprobamos si el formulario valida en el html.
            // El método HTMLSelectElement.checkValidity() comprueba si el elemento tiene restricciones y si las cumple. Si el elemento no cumple sus restricciones, el navegador lanza un evento cancelable invalid (en-US) al momento y luego devuelve false.
            if (this.checkValidity()) {

                try {
                    //La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores
                    const formulario=new FormData(this)
                    const username = formulario.get('username')  //<input  name="username">
                    const password = formulario.get('password') // <input  name="password">

                    // creado el objeto llamamos al servidor y le inroducimos los datos con un método post 
                    try {
                        await BaseDatos.loginCuenta(username, password)
                        window.location.href="index.html"
                        
                    } catch (error) {
                        PubSub.publish(PubSub.events.SHOW_ERROR, error.message)
                    }
                    

                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error.message)
                } finally {
                    PubSub.publish(PubSub.events.HIDDEN_LOADING)
                }
                
            } else {
                PubSub.publish(PubSub.events.SHOW_ERROR, error.message)
            }
        })
    }

}