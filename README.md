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

***`datapoa.com.br` API integration***

* **URL**

    /datapoa-integration

* **Method:**

    `GET`
  
*  **URL Params**

    None 

* **Data Params**

    `search=[String]`
  
    `limit=[Integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {"_id":1,"data_extracao":"2019-10-11T11:43:00","linha":"T52  ","sentido":"SULNORTE","numero_sequencia":1,"tipo":"TERMINAL/PARADA","nome":"TERMINAL SUL PERI MACHADO     ","endereco_logradouro":"PERI MACHADO                         "},
        ...results
    ]
    ```
    
* **Sample Call:**
    
    `fetch('/datapoa-integration?search=sul&limit=5')`

***`poatransporte.com.br` API integration***

* **URL**

    /poatransporte-integration

* **Method:**

    `GET`
  
*  **URL Params**

    None 

* **Data Params**

    `action=[String]`
  
    `type=[String]`
  
    `param=[String]`
  
    `busline=[String]`  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {"id":"5529","codigo":"250-1","nome":"1 DE MAIO"},
        ...results
    ]
    ```
    
* **Sample Call:**

    `fetch('/poatransporte-integration?action=nc&type=o&busline=MAIO')`

* **Notes:**

    None

***Find all buslines***

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

***Find a specific busline***

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
    
***Find buslines by radius location***

* **URL**

    /lines/location

* **Method:**

    `GET`
  
*  **URL Params**
	
   None	

* **Data Params**

    `lat[Number]`
   `lng[Number]`
   `distance=[Integer]`  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    [
        {
    		"id": 3,
    		"code": "074-1",
    		"name": "testeee Name"
  	},
	...results
    ]
    ```
    
* **Sample Call:**

    `fetch('/lines/location?lat=-30.124100584753&lng=-51.22352311129&distance=5')`

* **Notes:**

    Distance is a radius calculated by KM, so `distance = 1` = `1KM radius`    
    
***Register a busline***

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


***Update a busline***

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
  
***Delete a busline***

* **URL**

    /lines/:id

* **Method:**

    `DELETE`
  
*  **URL Params**

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
    fetch('/lines/1', {
        method: 'DELETE'
    })
    ```

* **Notes:**

    None

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
