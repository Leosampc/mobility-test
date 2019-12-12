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