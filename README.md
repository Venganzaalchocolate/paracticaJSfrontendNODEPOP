# Práctica NODEPOP con JavaScript. Frontend

Práctica del Bootcamp FULL STACK WEB de keepcoding. Página web desarrollada con Vanilla JavaScript, HTML y CSS. 

## Comenzando 🚀

- Clona o descargar este repositorio
- Clona o descarga el resporitorio https://github.com/kasappeal/sparrest.js
**Atención** : No clonar ambos repositorios en la misma carpeta.


## Instalación 🔧

- Instalar las dependencias del servidor de la siguiente manera:
  - Ubicate en la carpeta raiz donde hayas descargado o clonado sparrest.
  - Ejecuta los siguientes comandos:
    - Instalar dependencias: `npm i` 
    - Mover el archivo db.js que se encuentra en la raiz del proyecto y copiarlo en la raiz de la carpeta sparrest 
    - Arrancar servidor: `npm start`  
    **Atención**: Por defecto, arrancará el servidor en el puerto 8000, por lo que se podrá acceder a él a través de http://127.0.0.1:8000/
    
    - Este backend expone los siguientes endpoints:   
        ● POST /auth/register: permite registrar un usuario. Recibe como parámetros username y
        password y devuelve si se ha podido o no registrar al usuario (no permite usuarios con el
        mismo username en el sistema).  
        ● POST /auth/login: endpoint de autenticación. Recibe como parámetros username y password y devuelve un token JWT de autenticación.  
        ● POST /upload: que permite la subida de archivos a través de un atributo file. Sólo se pueden subir archivos usando el formato multipart/form-data.  
        ● En /api/:      
            ○ Se encuentran los endpoints ofrecidos por json-server, por lo que se aconseja la lectura de su documentación.  
            ○ Para usar los métodos POST, PUT o DELETE en cualquier subruta de /api/, será necesaria la autenticación usando token JWT.  
            ○ Esta autenticación se realiza añadiendo a las peticiones HTTP una cabecera   
            Authorization: Bearer <token>, donde <token> es el valor del token obtenido en el endpoint de login.   

### Página Principal ⚙️

- En la página principal encontraremos un listado de anuncios. Cada anuncio presentará una foto (si tiene), nombre, precio y si es compra o venta.  
  - Los anuncios se cargan desde el backend (sparrest)
  - El listado de anuncios gestiona los estados vacio, error, cargando y éxito.
- Al pulsar sobre un anuncio, se envia al usuario a la página de detalle de un anuncio.
- Si el usuario está autenticado, se carga el botón que permite al usuario subir un anuncio, al pulsarlo, lleva a la página para crear un anuncio

### Página Crea Anuncios

- En la página para crear un anuncio se deberá mostrar al usuario un formulario con los siguientes campos:
  - Foto (opcional): permitirá subir una foto del anuncio
  - Nombre (obligatorio): nombre del anuncio
  - Precio (obligatorio): precio del anuncio
  - Compra/venta (obligatorio): indica si el anuncio se trata de una compra o de venta

### Página Login

- La página de login muestra un formulario solicitando el nombre de usuario y contraseña.

### Página de Resgistro

- Muestra un formulario solicitando el nombre de usuario, email y  contraseña, además de un campo extra para volver a escribir la contraseña y verificar que el ususario no se ha equivocado.


## Construido con 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [Html5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  

## Autor ✒️

* **Elisabet D'Acosta Almirón** 
  
## Preguntas para el profesor 📄
 
1. Nombre de Archivo: **ControladorBotonLogin**. Linea **22**
   -  ¿Porque no me redirige al index cuando inicio sesión?
2. Nombre de Archivo: **ControladorCreaArticulo**. Linea **37**
   -  En Firefox no he conseguido que me muestre el windows.alert() ¿Por que?
3. Nombre de Archivo: **ControladorCreaCuenta**. Linea **21**
   - No acabo de comprender el checkvalidity() ya que si no lo pongo sigue sin enviarme el formulario si no cumple con las restricciones puestas en las etiquetas de html. Entonces ¿para que ponerlo?
4. Nombre de Archivo: **ControladorCreaCuenta** y **ControladorCreaArticulo**. Linea **61**
   - Sería más aconsejable poner una función de validación en un archivo a parte y que los dos controladores importaran esa función?. No estoy segura, ya que crearía una dependencia extra.
5. He tenido problemas con el Loader, es decir en la página principal se muestra perfectamente, se ve que funciona, pero cuando lo pongo en los demás controladores no consigo verlo. He puesto el debugger, no me muestra fallo, y no se si es que la conexión aun que sea lenta, no es lo suficientemente lenta, y carga las cosas demasiado rápido, o es que no lo estoy poniendo en el sitio correcto. Lo he puesto en varias partes del html, y he comprobado que funciona el pubsub, tanto muestra como oculta (como se ve en el index). Así que no lo comprendo bien. 
6. He intentado hacer el buscador, conseguí que funcionará pero solo si pongo el nombre correctamente, ni siquiera puedo ponerlo en mínusculas o mayúscula, debe buscarse exactamente como está en el anuncio. Eso se debería arreglar en el backend no?. (No lo he incluido en la práctica que le entrego porque no estaba bien pulido). Además me añadia el resultado al final de los artículos (en el index.) Como podría mostrar solo el resultado de la busqueda sin cargar el listado de articulos?.
7. He creado una página 404 muy mona pero no he visto el momento de ponerla, me parecía más práctico incluir frases dentro de mi página. ¿Donde lo pondría usted?

A temor de que estas preguntas deriven en un NO APTO prefiero no quedarme con las dudas. Espero no marearle demasido. Muchas gracias por todo. Me han quedado mucho más claro el async, las arrow function y la utilidad de la creación de clases. Ha sido divertido :D. 
