<p align="center">
    <img src="https://img.shields.io/badge/Server-Nodejs-brightgreen" alt="server"/>
    <img src="https://img.shields.io/badge/Database-PostgresSQL-blue" alt="database"/>
    <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue" alt="front"/>
    <a href="https://snthz.com/" target="_blank"> 
        <img src="https://img.shields.io/badge/Author-Axl%20Santos-blue" alt="author"/>
    </a>
</p>


# To Do List  (Challenge)


¡Hola y bienvenido al repositorio del proyecto To Do List!

Este proyecto es una aplicación de lista de tareas basada en la web, que utiliza una serie de tecnologías, como React+Vite, ReduxJS, NodeJS utilizando ExpressJS, PassportJS, JsonWebToken, PostgresSQL y Sequelize como ORM.

<p style="font-size: 12px;"><a href="https://todo-challenge-production.up.railway.app/auth" target="_blank"> 👓 Ir al sitio web</a></p>

## Configuración
Para comenzar a utilizar el proyecto, siga los siguientes pasos:

1. Clone el repositorio en su máquina local.
2. Abra una terminal y navegue hasta el directorio del proyecto.
3. Ejecute el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```
4. Cree una base de datos en PostgresSQL y configure su conexión en el archivo .env. Asegúrese de tener el servidor de PostgresSQL iniciado.
5. Ejecute las migraciones para crear las tablas de la base de datos:
```bash
npx sequelize-cli db:migrate
```
6. Ejecute el siguiente comando para iniciar el servidor y la aplicación:
```bash
npm run dev
```
## Uso
Después de seguir los pasos de configuración, podrá acceder a la aplicación en su navegador web visitando http://localhost:3000. Desde aquí, puede agregar, eliminar y marcar tareas como completadas.

## Tecnologías utilizadas
Este proyecto utiliza las siguientes tecnologías:

`React+Vite`: Una herramienta para la construcción de aplicaciones web en tiempo real.
`ReduxJS`: Una biblioteca para la gestión del estado de la aplicación.
`NodeJS` utilizando ExpressJS: Un marco de aplicaciones web para NodeJS.
`PassportJS`: Una biblioteca de autenticación para NodeJS.
`JsonWebToken`: Un estándar de autenticación basado en tokens.
`PostgresSQL`: Un sistema de gestión de bases de datos relacionales.
`Sequelize`: Un ORM (Object-Relational Mapping) para NodeJS.
`Railway`: Es una plataforma de alojamiento en la nube que simplifica el proceso de implementación de aplicaciones web.

## Contribuir
Si desea contribuir a este proyecto, ¡estamos encantados de tener su ayuda! Para hacerlo, siga estos pasos:

1. Fork este repositorio.
2. Cree una nueva rama en su fork.
3. Realice los cambios que desee.
4. Envíe una solicitud de extracción a través de GitHub.

Nos aseguraremos de revisar su solicitud de extracción y proporcionar comentarios. ¡Gracias por su contribución!