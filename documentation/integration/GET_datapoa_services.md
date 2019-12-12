## `datapoa.com.br` API integration

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
