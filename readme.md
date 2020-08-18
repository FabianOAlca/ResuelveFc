# Resuelve FC
< Prueba de Backend para Resuelve>

* Para correrlo 

< Necesitas tener [NodeJS](https://nodejs.org/en/download/) instalado en tu computadora version 12.18.2>

* 1.- Clonalo 
    ```
    git clone https://github.com/FabianOAlca/ResuelveFc.git
    cd Resuelve_FC
    ```
* 2.- Crea archivo .env en raiz para las variables de entorno
    < Se recomienda postgres>
    < Ejemplo >: 
    ```
    DATABASE_URL= postgres://USER:PASSWORD@localhost:5432/DATABASE_NAME >
    ```
* 3.- Corre en terminal y en la carpeta raiz del proyecto para instalar dependencias
    ```
    npm install
    ```
* 4.- Corre migraciones y seeders para inicializar datos por defecto 
     ```
    ./node_modules/.bin/sequelize db:migrate
    ./node_modules/.bin/sequelize db:seed:all
    ```
    < Tambien se puede agregar datos ingresando en el body de un post, ayudante con postman o insomnia >

* 5.- Correr Servidor
    ```
    npm run dev
    ```

* 6.- Se requieren softwares para simular peticiones tales como [Postman](https://www.postman.com/) e [Insombian](https://insomnia.rest/download/)

* 7.- El proyecto fue Realizado con framework express y programado en js la logica del problema a resolver esta en:

    ```
    ./Funciones de apoyo/ObtenerPaga.js
    ```
