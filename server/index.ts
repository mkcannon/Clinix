"use strict";
import app from './app';

const port: number = 3001; // define the port number

app.listen(port, () => {
  console.log(`WE ARE NOW LISTENING ON PORT # ${port}`);
}); // turn on the server at the defined port number