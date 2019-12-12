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

***`datapoa.com.br` API integration***

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
    
* **Sample Call:**

  `fetch('/datapoa-integration?search=sul&limit=5')`

***`poatransporte.com.br` API integration***

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
    
* **Sample Call:**

  `fetch('/poatransporte-integration?action=nc&type=o&busline=MAIO')`

* **Notes:**

    None

***Find all buslines***

* **URL**

  /lines

* **Method:**

  `GET`
  
*  **URL Params**

   None 

* **Data Params**

  `name=[String]`  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {
          "_id": "5defd12ff7c78245f2b85523",
          "code": "076-1",
          "name": "teste Name",
          "createdAt": "2019-12-10T17:09:03.785Z",
          "updatedAt": "2019-12-10T18:06:09.597Z",
          "id": 1,
          "__v": 0
        },
        ...results
    ]
    ```
    
* **Sample Call:**

  `fetch('/lines')`

* **Notes:**

    `name` query param filters list by line name. 

***Find a specific busline***

* **URL**

  /lines/:id

* **Method:**

  `GET`
  
*  **URL Params**

   `id=[Integer]` 

* **Data Params**

  None  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {
          "_id": "5defd12ff7c78245f2b85523",
          "code": "076-1",
          "name": "teste Name",
          "createdAt": "2019-12-10T17:09:03.785Z",
          "updatedAt": "2019-12-10T18:06:09.597Z",
          "id": 1,
          "__v": 0
        }
    ]
    ```
    
* **Sample Call:**

  `fetch('/lines/1')`

* **Notes:**

    None 
    
***Register a busline***

* **URL**

  /lines

* **Method:**

  `POST`
  
*  **URL Params**

   None 

* **Data Params**

  `code=[String]`
  
  `name=[String]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "_id": "5defe4951804314fa79f559f",
      "code": "0714-1",
      "name": "testeee Name",
      "createdAt": "2019-12-10T18:31:49.905Z",
      "updatedAt": "2019-12-10T18:31:49.905Z",
      "id": 4,
      "__v": 0
    }
    ```
    
* **Sample Call:**

  ```
  fetch('/lines', {
   body: JSON.stringify({
    "code": "0714-1",
	   "name": "testeee Name"
   })
  })
   ```

* **Notes:**

    If line already exists, the method update the related line by `code` body param. 
