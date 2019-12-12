## Register a itinerary

* **URL**

    /itineraries

* **Method:**

    `POST`
  
*  **URL Params**

    None 

* **Data Params**

    `line_id=[Integer]`
    `itineraries[Array[Number]]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
	    "location": {
	      "coordinates": [
		[
		  -30.124100584753,
		  -51.22352311129
		]
	      ],
	      "type": "MultiPoint"
	    },
	    "_id": "5df12922284dd035e4683ebb",
	    "line_objectId": "5defd142f7c78245f2b85525",
	    "line_id": 3,
	    "line_code": "074-1",
	    "line_name": "testeee Name",
	    "createdAt": "2019-12-11T17:36:34.829Z",
	    "updatedAt": "2019-12-11T17:36:34.829Z",
	    "id": 10,
	    "__v": 0
    }
    ```
    
* **Sample Call:**

    ```
    fetch('/itineraries', {
    	method: 'POST',
	data: JSON.stringify(
		{
			"line_id": 4,
			"itineraries": [
				[-37.11750758475300000, -56.20633111129000000]
			]
		}
	)
    })
    ```

* **Notes:**

    If the itinerary already exists, so is updated.
