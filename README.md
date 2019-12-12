# Mobility-test
 
Essa aplicação foi desenvolvida com o intuito de realizar um teste de conhecimentos de NodeJS, além de suas tecnologias relacionadas. 
Foi criado um sistema de APIs REST, com o intuito de integrar, manusear e fornecer informações relacionadas à serviços de transporte público.

**Como executar o projeto**

1. --
2. --
3. --

```
command line steps

```

## REST endpoints

Below is a list of all endpoints provided by the API.

[Integrations][]
- **[<code>GET</code> Datapoa services](/documentation/integration/GET_datapoa_services.md)**
- **[<code>GET</code> Poatransporte services](/documentation/integration/GET_poatransporte_services.md)**

[Lines][]
- **[<code>GET</code> Search lines](/documentation/lines/GET_lines.md)**
- **[<code>GET</code> Search specific line](/documentation/lines/GET_line.md)**
- **[<code>GET</code> Search lines by radius location](/documentation/lines/GET_lines_location.md)**
- **[<code>POST</code> Register a line](/documentation/lines/POST_line.md)**
- **[<code>PUT</code> Update a line](/documentation/lines/PUT_line.md)**
- **[<code>DELETE</code> Delete a line](/documentation/lines/DELETE_line.md)**

***Find all itineraries***

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

***Register a itinerary***

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

***Update a itinerary***

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

***Search taxi stands***

* **URL**

    /taxi-stands

* **Method:**

    `GET`
  
*  **URL Params**

    None

* **Data Params**
  
    `search=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "data": [
            "PONTO-ZONA-SUL#-30.123733798178#-51.222660282341#2019-12-12T13:58:29.496",
            ...results
	    ]
	}
    
    ```
    
* **Sample Call:**

    ```
    fetch('/taxi-stands')
    ```

* **Notes:**

    None
  
***Write taxi stands***

* **URL**

    /taxi-stands

* **Method:**

    `POST`
  
*  **URL Params**

    None

* **Data Params**
  
    `name=[string]`
    `lat=[Float]`
    `lng=[Float]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
	    "writing_line": "PONTO-ZONA-SUL#-30.123733798178#-51.222660282341#2019-12-12T13:58:29.496"
	}
    
    ```
    
* **Sample Call:**

    ```
    fetch('/itineraries/1', {
        method: 'POST',
        body: JSON.stringify({
            "name": "ponto zona sul",
            "lat": -30.123733798178,
            "lng": -51.222660282341
        })
    })
    ```

* **Notes:**

    None  
