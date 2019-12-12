## Find buslines by radius location

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