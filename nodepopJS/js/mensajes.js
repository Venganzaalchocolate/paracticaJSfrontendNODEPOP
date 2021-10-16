
// esta idea me la dió Javier, seguro que él lo habrá hecho diferente y mucho más extenso pero me pareció muy way poner los mensajes en castellano
// Habría puesto mas mensajes pero a veces no sabía provocar el error 
export function mensajesError(error) {
    const errores= 
    error==="Wrong username/password" ? "El usuario y/o la contraseña con incorrectos" 
    :error==="Username is taken" ? "El usuario ya existe, porfavor elige otro nombre"
    :error==="Cannot read properties of null (reading 'updatedAt')" ? "Este artículo no existe"
    :error==="articulo is null" ? "Este artículo no existe"
    :error==="NetworkError when attempting to fetch resource." ? "En estos momentos no puedes inciar sesión, porfavor inténtalo más tarde" 
    :error==="articulos is not iterable" ? "Error al recuperar los artículos, porfavor inténtalo más tarde"
    :error
    
    return errores
    
}