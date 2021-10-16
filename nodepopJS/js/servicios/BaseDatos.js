// la parte de la base de datos es la que más me ha costado de entener, la mayoría de las cosas las he copiado de tu codigo.

const url="http://localhost:8000"

export default {
    GETarticulos: async function(){
        const GETurl=url+"/api/articulos"
        try {
            const respuesta =  await fetch(GETurl)
            const articulos = await respuesta.json()
            return articulos
        } catch (error) {
            return error
        }
    },

    

    creaCuenta: async function(username, password, email) {
        const REGISTROurl = url+'/auth/register'
        return await this.post(REGISTROurl, {username, password, email})
    },

    loginCuenta: async function(username,password){
        const LOGINurl = url+'/auth/login'
        const formulario = await this.post(LOGINurl, {username, password})
        const token = formulario.accessToken
        localStorage.setItem('AUTH_TOKEN', token)
        

    }, 

    creaArticulo: async function(nombre, precio, estado, imagen) {
        const CREAurl = url + '/api/articulos'
        return await this.post(CREAurl, { nombre, precio, estado, imagen })
    },

    getDetalleArticulo: async function(id) {
        const DETALLEurl =url+ `/api/articulos/${id}?_expand=user`
        const respuesta = await fetch(DETALLEurl)
        if (respuesta.ok) {
            const articulo = await respuesta.json()
            articulo.sePuedeBorrar = articulo.userId === this.getAuthUserId()
            return articulo
        } else {
            if (respuesta.status === 404) {
                return null
            } else {
                window.location.href="respuestaHTTP.html"
            }
        }
    },

    deleteBorraArticulo: async function(id) {
        const BORRARurl=url+`/api/articulos/${id}`
        return this.delete(BORRARurl)
    },

    post: async function(url, body) {
        return await this.request('POST', url, body)
    },

    delete: async function (url, body={}) {
        return await this.request('DELETE', url, body)
    }, 

    request: async function(method, url, body) {
        const requestConfig = {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        if (this.isAuthenticed()) {
            const token = localStorage.getItem('AUTH_TOKEN')
            // requestConfig.headers.Authorization = `Bearer ${token}`
            requestConfig.headers['Authorization'] = `Bearer ${token}`
        }

        try {
            const response = await fetch(url, requestConfig)
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
    },

    getAuthUserId: function() {
        const token = localStorage.getItem('AUTH_TOKEN')
        if (token === null) {
            return null
        }
        const b64Parts = token.split('.')
        if (b64Parts.length !== 3) {
            return null
        }
        const b64Data = b64Parts[1]
        try {
            const userJSON = atob(b64Data)
            const user = JSON.parse(userJSON)
            return user.userId
        } catch (error) {
            console.error('Error while decoding JWT Token', error)
            return null
        }
    },


    isAuthenticed: function() {
        return localStorage.getItem('AUTH_TOKEN') !== null
    },

    cerrarSesion: function () {
        localStorage.removeItem('AUTH_TOKEN')
        location.href = 'index.html'
    }, 

    
}


