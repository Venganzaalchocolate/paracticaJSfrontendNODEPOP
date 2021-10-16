import BaseDatos from "../servicios/BaseDatos.js"
import { esquemaArticulo } from "../views.js"
import PubSub from "../servicios/PubSub.js"

export default class ControladorListadoArticulos{
    constructor(elemento){
        this.elemento=elemento
    }

    async pintarArticulos(){
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const articulos= await BaseDatos.GETarticulos()
            for (const articulo of articulos) {
            // por cada articulo se crea un elemento en el html
            // document=HTML
            // createElement método propio del HTML
                const etiquetaHTMLconArticulo= document.createElement('article')
            // con innerHTML inserta el elemento con el esquema de las views 'esquemaArticulo'
                etiquetaHTMLconArticulo.innerHTML=esquemaArticulo(articulo)
            // añade a this.elemento(en este caso es <section>) la etiqueta <article> con el esquema del artículo y los datos
                this.elemento.appendChild(etiquetaHTMLconArticulo)
        }
        } catch (error) {
            // aquí quería poner mi página 404 pero claro, luego pense que cuando borrase todos lo archivos de prueba saltaría autómaticamente, así que he tenido que poner un PubSub.
            // window.location.href="respuestaHTTP.html"
            PubSub.publish(PubSub.events.SHOW_ERROR, error.message)
        } finally {
            PubSub.publish(PubSub.events.HIDDEN_LOADING)
        }
    } 
    }

