## Write taxi stands

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