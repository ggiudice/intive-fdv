# intive-fdv
Ejercicio formulario de usuario





Pendientes
- Al cambiar locale que cambie el formateo de fecha y el idioma del datepicker. Pero pareciera que hay un bug en la version reciente de nxg-bootrap 
  https://github.com/valor-software/ngx-bootstrap/issues/4752  https://github.com/valor-software/ngx-bootstrap/issues/5086
- Hace que los usuarios se decida por un enviroment si desea usar el backend mock o el localStorage
- Aprender lo del Handler Error generico y/o mejorar la idea de error en general que quede con un servicio, mas generico, que al cambiar idioma tambien se enteren los mensajes de error, etc.
- Reveer critirio de aviso de cambio de lenguaje para los textos que estan en el DOM html, parecido a lo que de alguna forma hice con los locale de las fecha. Evaluar hacer un pipe que realice eso en los textos.