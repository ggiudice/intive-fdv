# intive-fdv

## Ejercicio formulario de usuario

### intive-fdv-front

Proyecto realizado en Angular 7. 

Conceptos usados en el proyecto:

* Uso del localStorage para los usuarios
* Usuario pueda cambiar en 3 idiomas la web. Uso de recuperar de carpeta mock los diversos lenguajes, por si no está levantado el servidor mock. Esto puede hacer que demore unos segundos al cambiar idioma (se debe esperar que retorne timeout del servermock no levantado.).
* Uso de un cache para no estar llamando seguidamente a los países, o los lenguajes ya pedidos. Tiene un tiempo de vida ese cache por cada recurso requerido.
* Uso de llamados a servicios http (Ej recuperar los diversos idiomas de un servidor).
* Uso de sass
* Uso de observadores para que se entere la web de cambio de idioma, de actualización de la lista de usuarios, etc.


Para levantar la web: `ng server`
Para hacer el build: `npm run-script build` (arma el build y configura las uri con intive-fdv-front asi se debe copiar con ese nombre de carpeta en apache, o algún otro server.)

###  intive-fdv-mock

Proyecto realizado con express para mock
[ExpressJs](https://expressjs.com/es/)

Actualmente obtiene los textos de la web para los diferentes idiomas seleccionables. También está el bosquejo previsto para gestionar desde el servidor a los usuarios (y no como localStorage).

Para levantar este servidor se debe realizar: `node app.js` (se aconseja usar node-dev para ir realizando cambios y no deber restartear el server)


### Pendientes

- Hacer que por medio de enviroment se pueda configurar si se desea usar el backend mock o el localStorage para la gestión de usuarios
- Aprender lo del Handler Error generico y/o mejorar la idea de error en general que quede con un servicio, ms genérico, que al cambiar idioma también se enteren los mensajes de error, etc.
- Rever criterio de aviso de cambio de lenguaje para los textos que están en el DOM html, parecido a lo que de alguna forma hice con los locale de las fecha. Evaluar hacer un pipe que realice eso en los textos.