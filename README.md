<h2 align="center">
    <a href="https://httpie.io" target="blank_">
        <img height="250" alt="HTTPie" src="https://user-images.githubusercontent.com/49013118/208801813-5ef5cedc-acbc-4224-babc-14a0d5ee4e4e.jpeg" />
    </a>

    Clothes Inventory - Practica Interna 2022
</h2>

## **Objetivo**
Este Repositorio contiene el codigo de fuente de desarrollo de un sistema web para control de inventario y venta de prendas de vestir


<div align="center">

<img src="https://raw.githubusercontent.com/httpie/httpie/master/docs/httpie-animation.gif" alt="HTTPie in action" width="100%"/>


</div>

## **Funcionalidades**


## **Requerimientos**

## **Requerimientos De Instalacion** :
* Cuenta En [MongoDB Atlas](https://www.mongodb.com/atlas/database)
* Cuenta Railways Asociada Con Github → [Pasos](https://docs.railway.app/getting-started)

## **Instalacion** :

Descargar proyecto del en tu directorio local :
```
git clone https://github.com/cricripaz/clothes_inventory_backend.git
```
Abrir el proyecto con tu IDE favorito :
* WebStorm → Recomendado [Link](https://www.jetbrains.com/es-es/webstorm/)
* Atom 
* Visual Studio Code

Agregar `.env` configuracion de la conexion de base de datos y el puerto en el que se ejecutara :
```
MONGODB_URL= TU_PROPIO_LINK.com
PORT = 3000 → Puede usar tu puerto de preferencia
```
<div align="center">
<img width="336" alt="Captura de pantalla 2022-12-20 a la(s) 10 17 07 p m" src="https://user-images.githubusercontent.com/49013118/208804766-3897436a-8ac6-4915-a515-9d74e4d392cd.png">
</div>

<p></p>

Una vez configurado el archivo .env entonces existen 2 formas de ejecutarlo de manera local :

## **Comandos** 

**Paso 1 Instalar librerias**
```
npm install express
npm install mongoose
npm install cors
npm install body-parser
```
**Paso 2 Ejecutar el proyecto**
```
npm start
```
   O

```
node app.js
```

Entonces una vez ejecutado los comando tendremos acontinuacion la siguiente imagen donde nos muestra un mensaje de de MONGODB CLOUD CONNECTED 

<div align="center"> 

<img width="802" alt="Captura de pantalla 2022-12-20 a la(s) 10 30 23 p m" src="https://user-images.githubusercontent.com/49013118/208806476-2f6b567f-f327-401b-afa0-a3f54ca91ade.png">
</div>

Despues podremos ejecutar todas las peticiones HTTP al siguiente link :

```
http://127.0.0.1:3000/[paths](s.com) 
```







## We lost 54k GitHub stars

Please note we recently accidentally made this repo private for a moment, and GitHub deleted our community that took a decade to build. Read the full story here: https://httpie.io/blog/stardust

![](docs/stardust.png)


## Getting started

- [Installation instructions →](https://httpie.io/docs#installation)
- [Full documentation →](https://httpie.io/docs)

## Features

- Expressive and intuitive syntax
- Formatted and colorized terminal output
- Built-in JSON support
- Forms and file uploads
- HTTPS, proxies, and authentication
- Arbitrary request data
- Custom headers
- Persistent sessions
- `wget`-like downloads

[See all features →](https://httpie.io/docs)

## Examples

Hello World:

```bash
https httpie.io/hello
```

Custom [HTTP method](https://httpie.io/docs#http-method), [HTTP headers](https://httpie.io/docs#http-headers) and [JSON](https://httpie.io/docs#json) data:

```bash
http PUT pie.dev/put X-API-Token:123 name=John
```

Build and print a request without sending it using [offline mode](https://httpie.io/docs#offline-mode):

```bash
http --offline pie.dev/post hello=offline
```

Use [GitHub API](https://developer.github.com/v3/issues/comments/#create-a-comment) to post a comment on an [Issue](https://github.com/httpie/httpie/issues/83) with [authentication](https://httpie.io/docs#authentication):

```bash
http -a USERNAME POST https://api.github.com/repos/httpie/httpie/issues/83/comments body='HTTPie is awesome! :heart:'
```

[See more examples →](https://httpie.io/docs#examples)

## Community & support

- Visit the [HTTPie website](https://httpie.io) for full documentation and useful links.
- Join our [Discord server](https://httpie.io/discord) is to ask questions, discuss features, and for general API chat.
- Tweet at [@httpie](https://twitter.com/httpie) on Twitter.
- Use [StackOverflow](https://stackoverflow.com/questions/tagged/httpie) to ask questions and include a `httpie` tag.
- Create [GitHub Issues](https://github.com/httpie/httpie/issues) for bug reports and feature requests.
- Subscribe to the [HTTPie newsletter](https://httpie.io) for occasional updates.

## Contributing

Have a look through existing [Issues](https://github.com/httpie/httpie/issues) and [Pull Requests](https://github.com/httpie/httpie/pulls) that you could help with. If you'd like to request a feature or report a bug, please [create a GitHub Issue](https://github.com/httpie/httpie/issues) using one of the templates provided.

[See contribution guide →](https://github.com/httpie/httpie/blob/master/CONTRIBUTING.md)
