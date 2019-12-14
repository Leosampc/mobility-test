# Mobility-test
 
Essa aplicação foi desenvolvida com o intuito de realizar um teste de conhecimentos de NodeJS, além de suas tecnologias relacionadas. 
Foi criado um sistema de APIs REST, com o intuito de integrar, manusear e fornecer informações relacionadas à serviços de transporte público.
Utilizei como base de dados o MongoDB, um banco NO-SQL extremante performático. Um dos principais motivos em optar pelo Mongo foi por conta de o mesmo possuir uma grande gama de funcionalidades relacionadas à geolocalização, um dos grandes pontos do teste.

**How to run the project**

1. Have Docker installed on the machine.
2. Clone repository and go to directory.
3. Starting containers with the docker compose.

```
git clone https://github.com/Leosampc/mobility-test.git
cd mobility-test
sudo docker-compose -f docker-compose.yml up -d --build

```

## REST endpoints

Below is a list of all endpoints provided by the API.

## Integrations
- **[<code>GET</code> Datapoa services](/documentation/integration/GET_datapoa_services.md)**
- **[<code>GET</code> Poatransporte services](/documentation/integration/GET_poatransporte_services.md)**

## Lines
- **[<code>GET</code> Search lines](/documentation/lines/GET_lines.md)**
- **[<code>GET</code> Search specific line](/documentation/lines/GET_line.md)**
- **[<code>GET</code> Search lines by radius location](/documentation/lines/GET_lines_location.md)**
- **[<code>POST</code> Register a line](/documentation/lines/POST_line.md)**
- **[<code>PUT</code> Update a line](/documentation/lines/PUT_line.md)**
- **[<code>DELETE</code> Delete a line](/documentation/lines/DELETE_line.md)**

## Itineraries
- **[<code>GET</code> Search all itineraries](/documentation/itineraries/GET_itineraries.md)**
- **[<code>POST</code> Register a itinerary](/documentation/itineraries/POST_itinerary.md)**
- **[<code>PUT</code> Update a itinerary](/documentation/itineraries/PUT_itinerary.md)**
- **[<code>DELETE</code> Delete a itinerary](/documentation/itineraries/DELETE_itinerary.md)**
- **[<code>DELETE</code> Delete a itinerary row](/documentation/itineraries/DELETE_itinerary_row.md)**

## Taxi-stands
- **[<code>GET</code> Search all taxi stands](/documentation/taxi-stands/GET_taxi-stands.md)**
- **[<code>POST</code> Register a taxi stand](/documentation/taxi-stands/POST_taxi-stands.md)**


## Libs utilizadas

* **axios**: Used to make http calls with third party services.
* **cors**: Used to configure server request settings.
* **express**: Express is a flexible nodejs framework that provides a set of various features for the application (project structure, routes, etc.). I used it to build the entire application base.
* **mongoose**: Nodejs library that provides a schema-based solution for modeling your application data through MongoDB. I used to make the connection to the database, CRUD, etc..
* **mongoose-sequence**: Plugin used to auto-increment alphanumerics. Used to generate Integers IDs similar to relational databases, such as MySQL.
