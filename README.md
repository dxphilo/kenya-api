<div align="center">

<h1>Kenya API</h1>

RESTFul API documenting all the information about country Kenya

</div>

![Blogsite website](https://cdn.britannica.com/15/15-050-B075588A/Flag-Kenya.jpg)

## Features

- Get general information about Kenya, its people, government, institutions, health, culture, energy, finance, infrastructure, geographical sites, etc.

- Get information about the 47 counties, including population, industries, area, tribes, postal codes, etc.

#### Built with

- Node.js
- Express.js

## Getting Started

### Home

To access the base URL, [https://kenya-api.onrender.com](https://kenya-api.onrender.com/health)

### API Routes

List of all the available kenya-api base routes.

- `/health`
- `/country`
- `/county`
- `/wards`
- `/postcodes`

```bash

# install dependencies

$ yarn install

# serve with hot reload at localhost:3000

$ yarn run dev

```

Your application will be served on port [3000](http://localhost:3000/) by default, you can change that by modifying the .env file.

For a detailed explanation of how things work, check out [Express.js](https://expressjs.com/en/starter/hello-world.html).


# REST API Documentation - County Data Endpoint

This REST API endpoint allows you to retrieve information about counties based on their county code.

## Get County Data

### Request

- Method: GET
- Endpoint: `/county`
- Parameters:
  - `county_code`: The unique numerical code of the county (required)

### Response

- Status Code: 200 (OK) - Successful request
- Status Code: 400 (Bad Request) - County not found or invalid `county_code`
- Status Code: 201 (Created) - Request without `county_code`, returns all counties

#### Successful Response

```json
{
  "county": {
    "code": 1,
    "name": "Mombasa",
    "capital": "Mombasa (City)",
    "contact": "esupport@mombasa.go.ke",
    "website": "https://eservices.mombasa.go.ke/site/",
    "location": "Coastal Kenya",
    "border": ["Kilifi", "Kwale", "Indian Ocean"],
    "area": "219 km2",
    "Population": "939,370",
    "Mining": ["Chrome ore", "Cement", "Salt", "Sand"]
  },
  "status": 200
}
```

```json
{
  "error": "County with the code {county_code} not found",
  "status": 400
}

```

#### Examples
Request

```bash
GET /county?county_code=1

```
Response

```json
{
  "county": {
    "code": 1,
    "name": "Mombasa",
    "capital": "Mombasa (City)",
    "contact": "esupport@mombasa.go.ke",
    "website": "https://eservices.mombasa.go.ke/site/",
    "location": "Coastal Kenya",
    "border": ["Kilifi", "Kwale", "Indian Ocean"],
    "area": "219 km2",
    "Population": "939,370",
    "Mining": ["Chrome ore", "Cement", "Salt", "Sand"]
  },
  "status": 200
}

```

```bash
GET /county?county_code=99

```

```json
{
  "error": "County with the code 99 not found",
  "status": 400
}
```

Request

```bash
GET /county
```

Response

```json
{
  "counties": [
    {
      "code": 1,
      "name": "Mombasa",
      "capital": "Mombasa (City)",
      "contact": "esupport@mombasa.go.ke",
      "website": "https://eservices.mombasa.go.ke/site/",
      "location": "Coastal Kenya",
      "border": ["Kilifi", "Kwale", "Indian Ocean"],
      "area": "219 km2",
      "Population": "939,370",
      "Mining": ["Chrome ore", "Cement", "Salt", "Sand"]
    },
    // Additional counties...
  ],
  "status": 200
}

```

# REST API Documentation - Wards Data Endpoint

This REST API endpoint allows you to retrieve information about wards based on their ward code.

## Get Wards Data

### Request

- Method: GET
- Endpoint: `/wards`
- Parameters:
  - `ward_code`: The unique alphanumeric code of the ward (required)

### Response

- Status Code: 200 (OK) - Successful request
- Status Code: 400 (Bad Request) - Ward not found or invalid `ward_code`
- Status Code: 201 (Created) - Request without `ward_code`, returns all wards

### Examples

#### Request

GET /wards?ward_code=40101

```bash

#### Successful Response

```json
{
  "ward": {
    "code": "40101",
    "office": "Ahero"
  },
  "status": 200
}
```

Error Response

```json
{
  "error": "Ward with the code 40101 not found",
  "status": 400
}

```

Request

```bash
GET /wards?ward_code=99999

```

Error Response

```json
{
  "error": "Ward with the code 99999 not found",
  "status": 400
}
```
Request

```bash
GET /wards

```

Response 


```json
{
  "wards": [
    {
      "code": "40101",
      "office": "Ahero"
    },
    {
      "code": "30101",
      "office": "Ainabkoi"
    },
    {
      "code": "40139",
      "office": "Akala"
    },
    // Additional wards...
  ],
  "status": 200
}
```



## Authors

- [John Philip](https://www.github.com/developerphilo)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)