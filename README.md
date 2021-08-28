# Proyecto React CoderHouse - CoffeShop

### CoffeShop
 Es un proyecto que el dia de mañana aspira a ser un e-commerce real, busca informar sobre la variedad de cafe, las diferentes formas de hacerlo y poder adquirir los elementos necesarios.

### Cuenta con:
    - Una barra de navegacion que incluye:
        > Logo
        > Carrito con un indicador de cuantos productos posee
        > Una seccion de "Nosotros" donde se carga un componente 
        > Una seccion de "Contactanos" donde se incluyen links de contacto a LinkedIn, GitHub y la posibilidad de enviar un mail funcional a mi casilla de correo
    - Vista a pantalla principal que incluye: 
        > Listado de las categorias
        > Listado de los principales productos
    - Vista de la categoria seleccionada con sus productos
    - Vista del Detalle de producto seleccionado que incluye:
        > Nombre, precio y descripcion
        > Botones para modificar la cantidad de productos a agregar
        > Boton para agregar productos al carrito
        > Boton para finalizar compra
    - Vista del carrito que incluye:
        > Listado de los productos con el detalle de los mismos
        > Boton para remover cada producto
        > Boton para borrar todos los productos del carrito
        > El total de la suma del precio de todos los productos
        > Formulario para agregar los datos del comprador y cargarlo en la base de datos
        > Validaciones para cada campo del formulario
        > Una vez cargado en la base de datos se produce un boton para mostrar el id de la compra y limpiar el carrito

## Instalacion

Una vez clonado el repositorio desde https://github.com/tomasVergara14/proyecto-coffe.git

Puedes correrlo abriendo la consola y parado sobre la carpeta, correr el comando:

> npm install

para instalar todas las dependencias, una vez instaladas correr el comando:

> npm start

## Dependencias utilizadas:

## Como base de datos online:

- "firebase": "^8.9.1"

## Para utilizar iconos:

- "@fortawesome/fontawesome-svg-core": "^1.2.35"
- "@fortawesome/free-brands-svg-icons": "^5.15.3"
- "@fortawesome/free-solid-svg-icons": "^5.15.3"
- "@fortawesome/react-fontawesome": "^0.1.14"

Se utilizo Fontawesome por su gran variedad de iconos y su usabilidad

## Para realizar los avisos:

- "sweetalert": "^2.1.2"

## Para Enviar mail y contactar

- "emailjs-com": "^3.2.0"

## Para realizar tests:   

- "@testing-library/jest-dom": "^5.14.1"
- "@testing-library/react": "^11.2.7"
- "@testing-library/user-event": "^12.8.3"

## Dependencias de react:

- "react": "^17.0.2"
- "react-dom": "^17.0.2"
- "react-router-dom": "^5.2.0"