## Find all buslines

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