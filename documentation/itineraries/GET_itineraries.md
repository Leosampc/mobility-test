## Find all itineraries

* **URL**

    /itineraries

* **Method:**

    `GET`
  
*  **URL Params**

    None 

* **Data Params**

    `line_id=[Integer]`  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
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
	  },
        ...results
    ]
    ```
    
* **Sample Call:**

    `fetch('/itineraries')`

* **Notes:**

    `line_id` query param filters list by reference line id.