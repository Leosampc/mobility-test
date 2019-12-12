***Delete a itinerary***

* **URL**

    /itineraries/delete-all:line_id

* **Method:**

    `DELETE`
  
* **URL Params**

    None

* **Data Params**
  
  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    Operation sucessful!
    
    ```
    
* **Sample Call:**

    ```
    fetch('/itineraries/1', {
        method: 'DELETE'
    })
    ```

* **Notes:**

    None