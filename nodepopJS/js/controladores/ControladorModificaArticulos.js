import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"
import { esquemaArticuloDetalle } from "../views.js"


export default class {

    constructor(elemento, id) {
        this.elemento=elemento
        this.cargaDetalleArticulo(id)
    }


    async cargaDetalleArticulo(id){
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const articulo = await BaseDatos.getDetalleArticulo(id)
            this.elemento.innerHTML = esquemaArticuloDetalle(articulo)
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error.message)
        } finally {
            this.hayBoton(id)
            PubSub.publish(PubSub.events.HIDDEN_LOADING)
        }
    }

   //  compruebo si tiene el botón de borrar, si lo tiene es que es el creador del artículo y permito que lo borre si lo desea
    hayBoton(id){
        const boton = document.querySelector('.borrar')
        if(boton!==null){
            boton.addEventListener('click', async ()=>{
                const pregunta = window.confirm('¿Seguro que quieres borrar?')
                if (pregunta) {
                    try {
                        PubSub.publish(PubSub.events.SHOW_LOADING)
                        await BaseDatos.deleteBorraArticulo(id)
                        PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Se ha borrado con éxito')
                    } catch (error) {
                        PubSub.publish(PubSub.events.SHOW_ERROR, "No se ha podido borrar el artículo")
                    } finally {PubSub.publish(PubSub.events.HIDDEN_LOADING)}
                }
            })
        }
    }
}