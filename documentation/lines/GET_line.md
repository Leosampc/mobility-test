## Find a specific busline

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