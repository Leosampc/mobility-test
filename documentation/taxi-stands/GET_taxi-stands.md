## Search taxi stands

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