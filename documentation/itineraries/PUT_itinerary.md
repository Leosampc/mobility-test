## Update a itinerary

* **URL**

    /itineraries/:line_id

* **Method:**

    `PUT`
  
*  **URL Params**

    `line_id[Integer]` 

* **Data Params**

    `itineraries[Array[Number]]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
	"itineraries": [
		[-37.11750758475300000, -56.20633111129000000]
	]
    }
    ```
    
* **Sample Call:**

    ```
    fetch('/itineraries/4', {
    	method: 'PUT',
	data: JSON.stringify(
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