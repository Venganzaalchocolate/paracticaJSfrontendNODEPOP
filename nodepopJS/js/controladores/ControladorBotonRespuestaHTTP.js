
// Cuando cree este controlador estaba con el turbo puesto y habría sido más práctico hacer un enlace en el html al index que crear un controlador para esto

export default class {

    constructor(elemento) {
        this.elemento=elemento
        this.escuchaEventos()
    }

    escuchaEventos(){

        this.elemento.addEventListener('click', async ()=>{
            window.location.href = "index.html"

        })

    }
}