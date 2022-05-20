"use strict";

import express from "express"; // require the express server
const cors = require("cors"); // require cors
const app = express(); // instantiate the server
import router from './router/index' // import the router file from the router folder

app.use(cors()); // turn on cors

app.use(express.json()); // turn on the body parser which allows us to receive json messages

app.use(router); // turn on the router

export default app;