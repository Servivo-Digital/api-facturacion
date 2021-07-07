
 
 <div align="center">
<img width="200px"  src="https://i.postimg.cc/d3Q1754H/logo-servivo-r-copia-copia-04-copia.png" />

# Api-facturación 
</div>


[SerVivo Digital](https://Servivo.digital)
## Somos expertos en construcción de negocios digitales.

#### Powered by Service

<br>
<br>


 <div align="center">

######  Consejo rápido:‎‎ Utilice la función "buscar en la página" de su navegador para buscar tipos de recursos específicos ( o ).‎ 
`Ctrl+F `   `Cmd+F`
‎</div>

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

En esta seccion conoceras los metodos y formas de identificarte ante la api, es e suma importancia para la conservacion y resguardo de la informacion manipulada en este servicio.

<br><br>

## :closed_lock_with_key: SignUp 

<br>

Para comenzar a interactura con la api debemos verificar tu identidad,deberas crear una cuenta siguiendo los siguiente lineamientos.

<br>

- ### :globe_with_meridians: **Peticion.** 

    <br>

    -   ### :link: EndPoint.

        Para poder crear un cuenta y obtener un `JSONWebToken` debemos enviar un peticion `POST` al siguiente ENDPOINT:

        <br>

        ```curl
        /api/auth/signUp
        ```

        ```http
        /api/auth/signUp
        ```
        <br>

    -   ### :white_small_square: Objeto.
        
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

        ### :page_facing_up: Detalle de los argumentos 
        | Nombre | Tipo   | Descripción |
        |:-----  |:--------:|:------|
        | username  | `String` | El nombre del usuario |
        | email     | `String` | El correo del usuario |
        | password  | `String` | La contraseña del usuario|
        | roles     | `Object` | El nivel de privilegio del usuario|

        <br>

- ### :key: **Resultado.**
    -  ### :white_check_mark: Registro Exitoso.
    Si tu registro fue exito, el servidor te regresara un token con esta forma

    <br>

    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTRhMmU4ZTA0NTllNDFhMDFjZWM2NyIsImlhdCI6MTYyNTU5NjY0OCwiZXhwIjoxNjI1NjgzMDQ4fQ.56-59Wenzd471-Be32f6MAXzjiMXbvMToq0cFFJhL-0"
    }
    ``` 

    <br>

    -  ### :x: Registro Fallido.
     Si tu registro fallo, el servidor te regresara un mensaje con esta forma

    <br>

    ```json
    {
        "message": "the registration failed, verifies your information and tries again"
    }
    ``` 

    <br>




<br>

##  :unlock: Login 

<br>

 Si ya tienes una cuenta, los tokens tienen un tiempo de expiracion de un dia, asi que deberas inicar sesion constantemente, recuerda que esta medida es con fines de seguidada.

- ### :globe_with_meridians: **Peticion.** 

    -   ### :link: EndPoint.
         Para inicar session y renovar tu token deberas hacer una peticion `POST` al siguiente ENDPOINT:

        ```http
        /api/auth/signIn
        ```
    -   ### :white_small_square: Objeto.
        
         con un objeto con la siguiente estructura: 
         ```json
                {
                    "email": "user@mail.com",
                    "password":"password",
                }
         ``` 
         ### :page_facing_up: Detalle de los argumentos 
        | Nombre | Tipo   | Descripción |
        |:-----  |:--------:|:------|
        | email     | `String` | El correo del usuario |
        | password  | `String` | La contraseña del usuario|


- ###  :key: **Resultado.**
    -  ### :white_check_mark: Login Exitoso.
        Si tu login fue exito, el servidor te regresara un token con esta forma

    <br>

    ```json
    {
        "User": [
            {
                "id": "60e3b97808dsdc802ed4f54ebd",
                "username": "UsuarioPruena",
                "email": "example@mail.com",
                "roles": [
                    {
                        "_id": "0e38fa5eee97a02907bc40e",
                        "name": "admin"
                    },
                    {
                        "_id": "0e38fa5eee97a02907bc40d",
                        "name": "moderator"
                    }
                ],
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTNiOTc4MDg1YzgwMmVkNGY1NGViZCIsImlhdCI6MTYyNTYyxXI2MiwiZXhwIjoxNjI1NzA3NjYyfQ.LJMR-rREzKkN2IHwZhxWoXxMCy-9dqFz9Srl8qK0azk"
            }
        ]
    }
    ``` 

    <br>

    -  ### :x: Login Fallido.
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


:octocat:
<div>
 
