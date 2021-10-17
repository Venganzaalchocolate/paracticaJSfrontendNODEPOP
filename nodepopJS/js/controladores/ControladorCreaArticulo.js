import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"


export default class {

    constructor(elemento) {
        this.elemento=elemento
        this.escuchaEventos()
    }

    escuchaEventos(){
        
        this.elemento.addEventListener('submit', async (evento)=>{
            PubSub.publish(PubSub.events.SHOW_LOADER)

            //evitamos el comportamiento por defecto (que el formulario se envie) para poder comprobar antes si es válido
            evento.preventDefault()

            // validamos el formulario en el html
            // El método HTMLSelectElement.checkValidity() comprueba si el elemento tiene restricciones y si las cumple. Si el elemento no cumple sus restricciones, el navegador lanza un evento cancelable invalid (en-US) al momento y luego devuelve false.
            if(this.elemento.checkValidity()){
                try {
                    //La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores
                    const formulario=new FormData(this.elemento)
                    const nombre = formulario.get('nombre') //<input  name="nombre">
                    const precio = formulario.get('precio') //<input  name="precio">
                    const estado= formulario.get ('estado') //<input  name="estado">
                    // En este caso llamamos a la función compruebaImagen para poner una imagen por defecto en caso de que el cliente no tenga
                    const imagen = this.compuebaImagen(formulario.get ('imagen'))

                    // Validamos si contiene caracteres especiales(por si acaso)
                    if(this.validaCampos(nombre)===false 
                    && this.validaCampos(precio)===false) {
                        await BaseDatos.creaArticulo(nombre,precio,estado,imagen)
                        // Aquí tengo un problema con el naveador. Firefox no me muestra el mensaje de alerta, me redirige automáticamente ¿por qué?
                        PubSub.publish(PubSub.events.SHOW_SUCCESS, "El artículo se ha creado correctamente")
                    }

                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error.message)
                } finally {
                    PubSub.publish(PubSub.events.HIDDEN_LOADER)
                }
            }

        })
    }

    compuebaImagen(imagen){
        // Compruebo si el campo imagen esta vacio, si lo está le añado una imagen por defecto
        if(imagen===''){
            return "/nodepopJS/recursos/imagenes/noImagen.jpg"
        } else {
            return imagen
        }
    }

    validaCampos(campo){
        // Creo una expresion regular muy simple donde compruebo si existe algún carácter especial
        const expresionRegular = new RegExp('[<>\*\$=_]')
        const validado = expresionRegular.test(campo)
        // Si contiene algún caracter especial muestro un error (en teoria en el html ya me valida los campos pero he creado esta pequeña función por si alguién modifica el html y borra las expressiones regulares)
        if (validado) {
            return PubSub.publish(PubSub.events.SHOW_ERROR, 'Error al validar los campos, contiene caracteres especiales')
        } else {
            return validado
        }
    }

    

}