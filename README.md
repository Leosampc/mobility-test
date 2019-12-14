# Mobility-test
 
Essa aplicação foi desenvolvida com o intuito de realizar um teste de conhecimentos de NodeJS, além de suas tecnologias relacionadas. 
Foi criado um sistema de APIs REST, com o intuito de integrar, manusear e fornecer informações relacionadas à serviços de transporte público.
Utilizei como base de dados o MongoDB, um banco NO-SQL extremante performático. Um dos principais motivos em optar pelo Mongo foi por conta de o mesmo possuir uma grande gama de funcionalidades relacionadas à geolocalização, um dos grandes pontos do teste.

**Como executar o projeto**

1. Ter o Docker previamente instalado na máquina.
2. Clonar o repositório e ir até o diretório.
3. Startar os containers com o docker compose.

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

* **axios**: Utilizado para realizar as chamadas http com os serviços de terceiros.
* **cors**: utilizado para estabelecer as configurações das requisições ao server.
* **express**: Express é framework flexivel para o nodejs que fornece um conjunto de diversos recursos para a aplicação (estrutura do projeto, rotas, etc). Utilizei-o para construir toda a base da aplicação.
* **mongoose**: Biblioteca do Nodejs que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação através do MongoDB. Utilizei para realizar a conexão com o banco de dados, CRUD, etc.
* **mongoose-sequence**: Plugin utilizado para autoincrementar alfanuméricos. Utilizei para gerar IDs INTEIROS similares a bancos relacionais, como por ex o MySQL.
