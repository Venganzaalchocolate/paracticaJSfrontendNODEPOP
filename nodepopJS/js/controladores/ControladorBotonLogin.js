import BaseDatos from "../servicios/BaseDatos.js"
import PubSub from "../servicios/PubSub.js"


export default class {

    constructor(elemento) {
        this.elemento=elemento
        this.escuchaEventos()
    }

    escuchaEventos(){

        this.elemento.addEventListener('click', async ()=>{
            try {
                // Compruebo que haya iniciado sesión 
                const estaLogin = await BaseDatos.isAuthenticed()
    
                if (estaLogin) {
                    // Cierro sesión borrando el token en la BaseDatos
                    // He intentado que después de cerrar sesión me redirigiera a index.html pero no lo he conseguido, no se porque no lo hace. Le agradeceria que me dijera el motivo. 
                    // He probado cambiando el orden pero no consigo que haga nada. 
                    window.location.href = 'index.html'
                    return await BaseDatos.cerrarSesion()
                } else {
                    // Si no ha iniciado sesión muestro la página de login
                    window.location.href = 'login.html'
                }
                
            } catch (error) {
                PubSub.publish(PubSub.events.SHOW_ERROR, error)
            }
        })

    }
}