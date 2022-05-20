// here we actually connect to our db
const mongoose = require("mongoose");
const root = "mongodb://localhost:";
const port = "27017";
const dbName = "clinixdb";
const myDB = root + port + "/" + dbName;

mongoose.connect(myDB, () => {
  console.log("connected to mongodb " + myDB);
});

export default mongoose;