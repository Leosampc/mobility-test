## Update a busline***

* **URL**

    /lines/:id

* **Method:**

    `PUT`
  
*  **URL Params**

   `id=[Integer]`

* **Data Params**
  
    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
    	"_id": "5defd12ff7c78245f2b85523",
        "code": "05-1",
        "name": "test Name",
        "createdAt": "2019-12-10T17:09:03.785Z",
        "updatedAt": "2019-12-12T18:10:23.155Z",
        "id": 1,
	    "__v": 0
    }
    ```
    
* **Sample Call:**

    ```
    fetch('/lines/1', {
        method: 'PUT',
        body: JSON.stringify({
            "code": "05-1",
            "name": "name updated"
        })
    })
    ```

* **Notes:**

    None