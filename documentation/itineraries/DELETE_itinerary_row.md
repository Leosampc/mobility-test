***Delete a itinerary row***

* **URL**

    /itineraries/delete-each/:line_id

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
        method: 'DELETE',
	body: JSON.stringify(
		{
			"itineraries": [
				[-37.11750758475300000, -56.20633111129000000]
			]
		}
	)
    })
    ```

* **Notes:**

    None