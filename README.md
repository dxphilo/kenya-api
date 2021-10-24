<div align="center">

<h1>Kenya API</h1>

API documenting all the information about country Kenya

</div>


![Blogsite website](https://cdn.britannica.com/15/15-050-B075588A/Flag-Kenya.jpg)


#### Built with

    - Expressjs



## Getting Started


### General country information

To get general information from this API, you need to perform a GET request to `https://kenyaapi.herokuapp.com` url.

#### Using Axios

```js
import axios from 'axios';
const res = await axios.get(`https://kenyaapi.herokuapp.com`);
// log out the data from the endpoint
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
}

```

```bash


# install dependencies

$ npm install


# serve with hot reload at localhost:3000

$ npm run dev

# build for production and launch server

$ npm run build


$ npm run start

# generate static project

$ npm run generate



```

For detailed explanation on how things work, check out [Expresssjs](https://expressjs.com/en/starter/hello-world.html).

