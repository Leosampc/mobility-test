# Mobility-test
 
  Essa aplicação foi desenvolvida com o intuito de realizar um teste de conhecimentos de NodeJS, além de suas tecnologias relacionadas. 
  Foi criado um sistema de APIs REST, com o intuito de integrar, manusear e fornecer informações relacionadas à serviços de transporte público.

**Como executar o projeto**

1. --
2. --
3. --

```
command line steps

```

## REST endpoints

***datapoa.com.br` API integration***

* **URL**

  /datapoa-integration

* **Method:**

  `GET`
  
*  **URL Params**

   None 

* **Data Params**

  `search=[String]`
  
  `limit=[Integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {"_id":1,"data_extracao":"2019-10-11T11:43:00","linha":"T52  ","sentido":"SULNORTE","numero_sequencia":1,"tipo":"TERMINAL/PARADA","nome":"TERMINAL SUL PERI MACHADO     ","endereco_logradouro":"PERI MACHADO                         "},
        ...results
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "An error ocurred on datapoa request, please try again." }`

* **Sample Call:**

  `fetch('/datapoa-integration?search=sul&limit=5')`

* **Notes:**

    None
    
`poatransporte.com.br` API integration

* **URL**

  /poatransporte-integration

* **Method:**

  `GET`
  
*  **URL Params**

   None 

* **Data Params**

  `action=[String]`
  
  `type=[String]`
  
  `param=[String]`
  
  `busline=[String]`  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {"id":"5529","codigo":"250-1","nome":"1 DE MAIO"},
        ...results
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "An error ocurred on poatransporte request, please try again." }`

* **Sample Call:**

  `fetch('/poatransporte-integration?action=nc&type=o&busline=MAIO')`

* **Notes:**

    None    
