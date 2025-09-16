<div align="center">

<h1>Kenya API</h1>

RESTFul API documenting all the information about country Kenya

</div>

![Blogsite website](https://cdn.britannica.com/15/15-050-B075588A/Flag-Kenya.jpg)

## Features

- To be added: Get general information about Kenya,its people, government, institutions, health, culture, energy, finance, infrastructure, geographical sites, etc.

- Get information about the 47 counties, including population, industries, area, tribes, postal codes, etc.

#### Built with

- Node.js
- Express.js

### Home

To access the base URL, [https://kenya-api.onrender.com/api/v1/](https://kenya-api.onrender.com/api/v1/)

To access health endpoint, [https://kenya-api.onrender.com/api/v1/health](https://kenya-api.onrender.com/api/v1/health)

### API Routes

List of all the available kenya-api base routes.

- `/health`
- `/info` # info about country kenya!
- `/county`
- `/wards`
- `/postal_stations`
- `/universities`
- `/tribes`
- `/hospitals`
- `/banks`

## Getting Started

Installation

```bash

# install dependencies

$ yarn install

# serve with hot reload at localhost:3000

$ yarn run dev

```

Your application will be served on port [3000](http://localhost:3000/) by default, you can change that by modifying the .env file.

For a detailed explanation of how things work, check out [Express.js](https://expressjs.com/en/starter/hello-world.html).

### REST API Documentation - County Data Endpoint

This REST API endpoint allows you to retrieve information about counties based on their county code.

### Get County Data

#### Request

- Method: GET
- Endpoint: `/county`
- Parameters:
  - `county_code`: The unique numerical code of the county (required)

### Response

- Status Code: 200 (OK) - Successful request
- Status Code: 400 (Bad Request) - County not found or invalid `county_code`

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

#### Not found error response

```json
{
  "error": "County with the code {county_code} not found",
  "status": 400
}
```

#### Request

```bash
GET /county?county_code=1

```

#### Response

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

#### Request

```bash
GET /county?county_code=99

```

#### Respoonse

```json
{
  "error": "County with the code 99 not found",
  "status": 400
}
```

#### Request

```bash
GET /county
```

#### Response

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
    }
    // Additional counties...
  ],
  "status": 200
}
```

### REST API Documentation - Wards Data Endpoint

This REST API endpoint allows you to retrieve information about wards based on their ward code.

### Get Wards Data

#### Request

- Method: GET
- Endpoint: `/wards`
- Parameters:
  - `ward_code`: The unique alphanumeric code of the ward (required)

#### Response

- Status Code: 200 (OK) - Successful request
- Status Code: 400 (Bad Request) - Ward not found or invalid `ward_code`

### Examples

#### Request

```bash
GET /wards?ward_code=40101
```

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

#### Error Response

```json
{
  "error": "Ward with the code 40101 not found",
  "status": 400
}
```

#### Request

```bash
GET /wards?ward_code=99999

```

#### Error Response

```json
{
  "error": "Ward with the code 99999 not found",
  "status": 400
}
```

#### Request

```bash
GET /wards

```

#### Response

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
    }
    // Additional wards...
  ],
  "status": 200
}
```

# Postal Stations API Documentation

This API endpoint allows you to retrieve information about postal stations based on their postal code.

## Get Postal Station Data

### Request

- Method: GET
- Endpoint: `/postal_stations`
- Parameters:
  - `post_code`: The unique numerical postal code of the station (required)

### Response

- Status Code: 200 (OK) - Successful request
- Status Code: 400 (Bad Request) - Postal station not found or invalid `post_code`
- Status Code: 200 (OK) - Request without `post_code`, returns all postal stations

#### Successful Response

```json
{
  "post": {
    "code": 12345,
    "name": "Sample Postal Station",
    "location": "Sample Location",
    "district": "Sample District"
  },
  "status": 200
}
```

#### Error Response

```json
{
  "error": "Post station with the code {postal_code} not found",
  "status": 400
}
```

### Examples

#### Request

```bash

GET /postal_stations?post_code=12345
```

### Response

```json
{
  "post": {
    "code": 12345,
    "name": "Sample Postal Station",
    "location": "Sample Location",
    "district": "Sample District"
  },
  "status": 200
}
```

#### Request

```bash
GET /postal_stations?post_code=99999
```

#### Response

```json
{
  "error": "Post station with the code 99999 not found",
  "status": 400
}
```

#### Request

```bash
GET /postal_stations
```

#### Response

```json
{
  "postal_stations": [
    {
      "code": 12345,
      "name": "Sample Postal Station 1",
      "location": "Sample Location 1",
      "district": "Sample District 1"
    },
    {
      "code": 67890,
      "name": "Sample Postal Station 2",
      "location": "Sample Location 2",
      "district": "Sample District 2"
    }
    // Additional postal stations...
  ],
  "status": 200
}
```

---

# Banks API Documentation

This API endpoint allows you to retrieve information about banks in Kenya. You can query by bank type, bank name, USSD code, or Paybill number.

---

⚠️ **Caution**:
The information provided by this API (including **Paybill numbers**, **USSD codes**, **Telephone/Fax numbers**, **Email addresses**, and **Website URLs**) is for **reference only**.
Before engaging in **any financial transactions, communications, or interactions with a bank**, you must independently verify these details through **official and trusted sources** (such as the Central Bank’s registry, the bank’s official website, or verified customer support channels).

- Do **not** send money, share personal details, or initiate transactions based solely on this API’s data.
- Be aware that malicious actors can impersonate banks using fake numbers, emails, or domains.
- Always confirm legitimacy before engage in making payments, signing agreements, or providing sensitive information.

This API is provided strictly for **informational and educational purposes**. The maintainers of this API **assume no responsibility** for financial loss, fraud, or damages resulting from misuse of the data.

---

## Get Bank Data

### Request

- **Method:** `GET`
- **Endpoint:** `/banks`
- **Query Parameters:**

  - `bank_type`: Filter banks by type (optional). Valid values:

    - `commercial`
    - `mortgage-finance-institution`
    - `non-operating-holding-company`

  - `bank_name`: Filter by partial/full bank name (optional, case-insensitive).
  - `ussd`: Filter by USSD code (optional, only applies to commercial banks).
  - `paybill`: Filter by Paybill number (optional, only applies to banks that have one).

---

## Response

- **200 (OK):** Successful request, returns matching bank(s).
- **400 (Bad Request):** Invalid bank type or malformed query.
- **404 (Not Found):** No banks match the provided query.
- **200 (OK):** Request without filters returns all banks.

---

### Examples

#### Request

```bash

GET /banks?bank_name=commercial&ussd=247
```

### Successful Response (Filtered by Bank Name)

```json
{
  "data": [
    {
      "id": 15,
      "name": "Equity Bank Kenya Limited",
      "postalAddress": "P. O. Box 75104-00200, Nairobi",
      "telephone": "+254-20- +254 20 2262000/2262956 /2262828, 0763026000, 07633026956, 0763026828",
      "fax": "+254-020-2737276",
      "email": "info@equitybank.co.ke",
      "website": "www.equitybankgroup.com",
      "physicalAddress": "Equity Centre, 9th Floor, Hospital Road, Upper Hill, Nairobi.",
      "dateLicensed": "28th December 2004",
      "peerGroup": "Large",
      "branches": 178,
      "agencies": 0,
      "salesCentres": 0,
      "subBranches": 13,
      "xpressUnits": 0,
      "type": "commercial",
      "ussd": "*247#",
      "payBill": 247247
    },
    {
      "id": 2,
      "name": "Equity Group Holdings Limited",
      "licensedSubsidiary": "Equity Bank Kenya Ltd",
      "postalAddress": "P.O. Box 75104 – 00200, Nairobi",
      "telephone": "+254 763 3026000 Contact Centre: +254 763 063 000",
      "email": "info@equitygroupholdings.com",
      "website": "www.equitygroupholdings.com",
      "physicalAddress": "Equity Centre, 9th Floor, Hospital Road, Upper Hill, Nairobi",
      "dateAuthorized": "31st December 2014",
      "type": "non-operating-holding-company"
    }
  ],
  "count": 2,
  "status": 200
}
```

---

### Error Response (Invalid Bank Type)

```json
{
  "error": "Invalid bank type",
  "status": 400
}
```

---

### Error Response (No Matching Results)

```json
{
  "error": "No bank(s) found matching the provided query",
  "query": {
    "bank_name": "nonexistent-bank"
  },
  "status": 404
}
```

---

### Request Without Filters

```bash
GET /banks
```

#### Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "ABSA Bank Kenya PLC",
      "postalAddress": "P. O. Box 30120 – 00100, Nairobi",
      "telephone": "+254-20-4254000, 3900000",
      "email": "absa.kenya@absa.africa",
      "website": "www.absabank.co.ke",
      "physicalAddress": "Absa Headquarters, Waiyaki Way, Westlands, Nairobi",
      "dateLicensed": "1916",
      "peerGroup": "Large",
      "branches": 85,
      "type": "commercial",
      "ussd": "*224#",
      "payBill": 111777
    },
    {
      "id": 2,
      "name": "Equity Bank Kenya Limited",
      "postalAddress": "P. O. Box 75104 – 00200, Nairobi",
      "telephone": "+254-763-063000",
      "email": "info@equitybank.co.ke",
      "website": "www.equitybankgroup.com",
      "physicalAddress": "Equity Centre, Upper Hill, Nairobi",
      "dateLicensed": "1984",
      "peerGroup": "Large",
      "branches": 190,
      "type": "commercial",
      "ussd": "*247#",
      "payBill": 247247
    }
    // ... additional banks
  ],
  "count": 42,
  "status": 200
}
```

## Contributing

Contributions are always welcome! You can contribute to this project in various ways, including but not limited to:

- Updating to correct information
- Adding missing information
- Writing and adding tests
- Fixing bugs and issues
- Improving documentation
- Implementing new features

See `contributing.md` for more details on how to get started with contributing.

Please adhere to this project's `code of conduct`.

#### Authors

- [John Philip](https://www.github.com/dxphilo)

## License

[MIT](https://choosealicense.com/licenses/mit/)
