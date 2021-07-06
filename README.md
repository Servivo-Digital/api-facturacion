
 
 <div align="center">
<img width="200px"  src="https://i.postimg.cc/d3Q1754H/logo-servivo-r-copia-copia-04-copia.png" />

# Api-facturación 
</div>


[SerVivo Digital](https://Servivo.digital)
## Somos expertos en construcción de negocios digitales.

#### Powered by Service

<br>
<br>

## Api-facturación

######  Consejo rápido:‎‎ Utilice la función "buscar en la página" de su navegador para buscar tipos de recursos específicos ( o ).‎ `Ctrl+F `   `Cmd+F`
‎

<br>
<div align="">
<img width="30px"  src="https://image.flaticon.com/icons/png/512/1076/1076337.png" />
</div>

### Información‎

<br>

Se trata de una API ‎‎de Generacion de 
[CFDI](https://www.cfdi.org.mx/#:~:text=Un%20CFDI%20es%20una%20Factura%20Electr%C3%B3nica%20que%20es,y%20es%20utilizado%20como%20un%20comprobante%20fiscal%20digital.) (_Comprobante Fiscal Digital por Internet_ ):‎‎ los método HTTP `GET`, `POST`, `DELETE`  está disponible en los recursos.‎

‎Se requiere autenticación para acceder a esta API y todos los recursos están totalmente en control de  
[SerVivo Digital](https://Servivo.digital). Para mayor informacion contactese con el equipo.
<br>

<br>
<div align="">
<img width="35px"  src="https://image.flaticon.com/icons/png/512/4252/4252292.png" />
</div>

### Política de uso justo‎

<br>

Api-facturacion es de su uso interno.Debido a esto, pedimos a todos los desarrolladores que cumplan con nuestra política de uso justo. Las personas que no cumplan con la política de uso justo tendrán su dirección IP permanentemente prohibida.‎

<br><br>

<div align="">
<img width="29px"  src="https://image.flaticon.com/icons/png/512/595/595759.png" />
</div>


## **Autenticación.**


## SignUp 

<br>

Para comenzar a interactura con la api debemos verificar tu identidad,deberas crear una cuenta siguiendo los siguiente lineamientos.

<br>

- ### **Peticion.** 

    <br>

    -   ### EndPoint.

        Para poder crear un cuenta y obtener un `JSONWebToken` debemos enviar un peticion `POST` al siguiente ENDPOINT:

        <br>

        ```curl
        /api/auth/signUp
        ```

        ```http
        /api/auth/signUp
        ```
        <br>

    -   ### Objeto.
        
         Con un objeto con la siguiente estructura: 
         
         <br>
         
         ```json
                {
                    "username":"USERNAME",
                    "email": "user@mail.com",
                    "password":"password",
                    "roles":[
                        "user"
                    ]
                }
         ``` 

        <br>

        ### Detalle de los argumentos 
        | Nombre | Tipo   | Descripción |
        |:-----  |:--------:|:------|
        | username  | `String` | El nombre del usuario |
        | email     | `String` | El correo del usuario |
        | password  | `String` | La contraseña del usuario|
        | roles     | `Object` | El nivel de privilegio del usuario|

        <br>

- ### **Resultado.**
    -  ### Registro Exitoso.
    Si tu registro fue exito, el servidor te regresara un token con esta forma

    <br>

    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTRhMmU4ZTA0NTllNDFhMDFjZWM2NyIsImlhdCI6MTYyNTU5NjY0OCwiZXhwIjoxNjI1NjgzMDQ4fQ.56-59Wenzd471-Be32f6MAXzjiMXbvMToq0cFFJhL-0"
    }
    ``` 

    <br>

    -  ### Registro Fallido.
     Si tu registro fallo, el servidor te regresara un mensaje con esta forma

    <br>

    ```json
    {
        "message": "the registration failed, verifies your information and tries again"
    }
    ``` 

    <br>




<br>

## Login 

<br>

 Si ya tienes una cuenta, los tokens tienen un tiempo de expiracion de un dia, asi que deberas inicar sesion constantemente, recuerda que esta medida es con fines de seguidada.

- ### **Peticion.** 

    -   ### EndPoint.
         Para inicar session y renovar tu token deberas hacer una peticion `POST` al siguiente ENDPOINT:

        ```http
        /api/auth/signIn
        ```
    -   ### Objeto.
        
         con un objeto con la siguiente estructura: 
         ```json
                {
                    "email": "user@mail.com",
                    "password":"password",
                }
         ``` 
         ### Detalle de los argumentos 
        | Nombre | Tipo   | Descripción |
        |:-----  |:--------:|:------|
        | email     | `String` | El correo del usuario |
        | password  | `String` | La contraseña del usuario|


- ### **Resultado.**
    -  ### Login Exitoso.
        Si tu login fue exito, el servidor te regresara un token con esta forma

    <br>

    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTRhMmU4ZTA0NTllNDFhMDFjZWM2NyIsImlhdCI6MTYyNTU5NjY0OCwiZXhwIjoxNjI1NjgzMDQ4fQ.56-59Wenzd471-Be32f6MAXzjiMXbvMToq0cFFJhL-0"
    }
    ``` 

    <br>

    -  ### Login Fallido.
        Si tu login fallo, el servidor te regresara un mensaje con esta forma

    <br>

    ```json
        {
            "message": "there are problems when entering session verify your information and do it again"
        }
    ``` 

    <br>






<div align="center">

Diseñado con ♥️ en [SerVivo Digital](https://Servivo.digital)
<div>

