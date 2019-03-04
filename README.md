# intive-fdv

## Ejercicio formulario de usuario


### intive-fdv-front
Proyecto realizado en Angular 7. 

Para levantar la web: `ng server`

Para hacer el build: `npm run-script build`
Arma el build y configura las uri con intive-fdv-front asi se debe copiar con ese nombre de carpeta en apache, o algun otro server.


###  intive-fdv-mock
Proyecto realizado con express para mock
[ExpressJs](https://expressjs.com/es/)

Actualmente obtiene los textos de la web para los diferentes idiomas seleccionables. Tambien esta el bosquejo previsto para gestionar desde el servidor a los usuarios (y no como localStorage).

Para levantar este servidor se debe realizar: node `app.js`
(se aconseja usar node-dev para ir realizando cambios y no deber restartear el server)


### Pendientes
- Hacer que por medio de enviroment se pueda configurar si se desea usar el backend mock o el localStorage para la gestión de usuarios
- Aprender lo del Handler Error generico y/o mejorar la idea de error en general que quede con un servicio, ms generico, que al cambiar idioma tambien se enteren los mensajes de error, etc.
- Reveer criterio de aviso de cambio de lenguaje para los textos que estan en el DOM html, parecido a lo que de alguna forma hice con los locale de las fecha. Evaluar hacer un pipe que realice eso en los textos.