<div align="center">

<h1>Kenya API</h1>

RESTFul API documenting all the information about country Kenya

</div>


![Blogsite website](https://cdn.britannica.com/15/15-050-B075588A/Flag-Kenya.jpg)

## Features

- Get general infomation about kenya,its people, government, institutions, health, culture, energy, finance, infrastructure, geographical sites e.t.c
- Get information about the 47 counties from population, industries, area, tribes, postal_codes e.t.c

## Authors

- [John Philip](https://www.github.com/developerphilo)



#### Built with

    - Expressjs



## Getting Started


### General country information

To get general information from this API, you need to perform a GET request to `https://kenyaapi.herokuapp.com` endpoint.

#### Using Axios

```js

import axios from 'axios';

const res = await axios.get(`https://kenyaapi.herokuapp.com`);
 // log the data to the console
console.log(res)

```

#### Using Fetch API

```js

fetch('https://kenyaapi.herokuapp.com')

    .then(response => response.json())

    .then(data =>
    // log the data to the console
    console.log(data)
    );

```

### General Data about the 47 counties

To get information about the 47 counties of kenya, you need to perform a GET request to `https://kenyaapi.herokuapp.com/counties` endpoint.

#### Using Axios

```js

import axios from 'axios';

const res = await axios.get(`https://kenyaapi.herokuapp.com/counties`);
 // log the data to the console
console.log(res)

```

#### Using Fetch API

```js

fetch('https://kenyaapi.herokuapp.com/counties')

    .then(response => response.json())

    .then(data =>
    // log the data to the console
    console.log(data)
    );

```

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)


```bash


# install dependencies

$ npm install


# serve with hot reload at localhost:3000

$ node src/index.js


```

For detailed explanation on how things work, check out [Expresssjs](https://expressjs.com/en/starter/hello-world.html).

