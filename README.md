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

Una vez configurado el archivo .env entonces existen 2 formas de ejecutarlo de manera local o En RAILWAYS  :

## **METODO 1**

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


## **METODO 2**

**Paso 1**
Ingresar a https://railway.app/ 


**Paso 2**
Iniciar sesion 


**Paso 3**
Hacer Click en Start A New Project

<div align="center">
<img width="921" alt="Captura de pantalla 2022-12-20 a la(s) 10 55 06 p m" src="https://user-images.githubusercontent.com/49013118/208809778-009008a5-6915-4de7-a09b-6e7a63b687bc.png">
</div>



**Paso 4**

Seleccionar la opcion apartir de un repositorio de GitHub

<div align="center">
<img width="608" alt="Captura de pantalla 2022-12-20 a la(s) 10 57 07 p m" src="https://user-images.githubusercontent.com/49013118/208810050-d7bbb9a1-f4a4-475d-bd0a-ccfee961c80e.png">

</div>

**Paso 5**

Seleccionar una repo donde vayamos a subir el codigo clonado 


<div align="center">
<img width="611" alt="Captura de pantalla 2022-12-20 a la(s) 10 59 20 p m" src="https://user-images.githubusercontent.com/49013118/208810316-6e92e8e4-ce6a-4655-affd-3b956bf1cab1.png">
</div>


**Paso 6**

Seleccionar la Opcion Deploy Now  y **LISTO**

<div align="center">
<img width="656" alt="Captura de pantalla 2022-12-20 a la(s) 11 01 26 p m" src="https://user-images.githubusercontent.com/49013118/208810597-e231e49e-aa80-44da-b866-f42b818f8577.png">
</div>



## Servicios HTTP 

## Productos
- Ejemplo → https://clothesinventory.up.railway.app/products/get-all
- **GET** →  /products/get-all → Obtiene Todos los productos vendidos 
- **POST** →  /products/products-sold → Crea un producto vendido
- **POST** →  /items/get-item-by-name-type-size → Obtiene un producto mediante una busqueda por los parametros { name,type,size }
- **PUT** →  /items/sell-product → actualiza la cantidad de productos cuando un producto es vendido { name,type,size }
- 

## Opciones-Items

- **GET** →  options/optionsType → Obtiene Todas opciones del tipo de ropa 
- **POST** →  options/addOptionType → Crea una opcion de tipo de ropa

- **GET** →  /options-brand/optionsBrand → Obtiene Todas opciones de marca de ropa 
- **POST** →  /options/addOptionBrand → Crea una opcion de marca de ropa

- **GET** →  /options-size/optionsSize → Obtiene Todas opciones de Talla de ropa 
- **POST** →  /options-size/addOptionSize → Crea una opcion de Talla de ropa


## Items

- **GET** →  /items/getAll → Obtiene Todos los Items en la coleccion 
- **POST** →  /items/addItem → Crea un nuevo Item 
- **PUT** →  /items/addQuantityProduct → Actualiza el parametro {quantity} de un item params : (name , size )




## DEPLOY FRONTEND 


## **METODO 1**

- Clonar el repositorio de [Clothes Inventory - Frontend](https://github.com/cricripaz/clothes_inventory_frontend) 

- Abrir el Archivo Index.html 

- Comenzar la Navegacion

## **METODO 2**

- Instalar y configurar Servidor Apache en Linux → [LINK](https://github.com/cricripaz/clothes_inventory_frontend)

- Buscar el Directorio 
```
/home/$USER/public_html
```

- Subir toda la carpeta clonada al directorio /public_html 





