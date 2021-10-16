

export function esquemaArticulo(articulo) {
    return `<a class="aIndex" href="/nodepopJS/html/modificaArticulo.html?id=${articulo.id}">
            <div class="imagen">
                <img src="${articulo.imagen}" onerror="this.src = '/nodepopJS/recursos/imagenes/noImagen.jpg'">
            </div>
            <div class="datosIndex">
                <h2 class="nombre">${articulo.nombre}</h2>
                <p class="precio">${articulo.precio} €</p>
                <p class="estado">${articulo.estado}</p>
            </div>
            </a>`
}

export function esquemaError(error) {
    return `<div class="mensaje">
                <i class="fas fa-bomb fa-3x"></i>
                <p class="textoError">${error}</p></div>`
}

export function esquemaArticuloDetalle(articulo) {
    // fecha = DD/MM/AA
    const fecha = new Date(articulo.updatedAt).toLocaleDateString()
    // hora = HH:MM
    const hora = new Date(articulo.updatedAt).toLocaleTimeString()
    // si tiene la propiedad se puede borrar, se pinta el botón
    const boton = articulo.sePuedeBorrar ? `<button class="borrar">BORRAR</button>` : ''
    return `<article class="detalle">
            <div class="imagen">
                <img id="detalleImagen"src="${articulo.imagen}" onerror="this.src = '/nodepopJS/recursos/imagenes/noImagen.jpg'">
            </div>
            <div class="datos">
                <h2 class="nombre">${articulo.nombre}</h2>
                <p class="precio">${articulo.precio} €</p>
                <p class="estado">Se ${articulo.estado}</p>
                <p class="autor">Publicado por: ${articulo.user.username}</p>
                <p class="fecha">Se publicó el ${fecha} a las ${hora}</p>
            </div>
            <div class="botonBorrar">
                ${boton}
            </div>
            </article>`
}


