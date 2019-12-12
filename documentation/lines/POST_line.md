## Register a busline

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
        method: 'POST',
        body: JSON.stringify({
            "code": "0714-1",
            "name": "testeee Name"
        })
    })
    ```

* **Notes:**

    If line already exists, the method update the related line by `code` body param.
