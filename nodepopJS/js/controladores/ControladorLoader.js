import PubSub from "../servicios/PubSub.js"

export default class ControladorLoader{

    constructor(elemento) {
        this.elemento=elemento
        PubSub.subscribe(PubSub.events.SHOW_LOADING, () => {
            this.mostrarLoading()
        })
        PubSub.subscribe(PubSub.events.HIDDEN_LOADING, () => {
            this.quitarLoading()
        })
        
    }
    // muestra el loading
    mostrarLoading(){
        this.elemento.setAttribute("style", "display:block;")
    }
    // quita el loading
    quitarLoading(){
        this.elemento.setAttribute("style", "display:none;")
    }

}