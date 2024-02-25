const app = require("./app");
const mongoose = require("mongoose");

let dbString = `mongodb+srv://<user>:<password>@ind.lyhlgcy.mongodb.net/?retryWrites=true&w=majority&appName=IND`;

/* 
  Express server
*/
app.listen(process.env.PORT, () => {
  console.log(`Server is up @ ${process.env.PORT}`);
});

/* 
  DB connection
*/
dbString = dbString.replace("<user>", process.env.DB_USER);  
dbString = dbString.replace("<password>", process.env.DB_PASS);

mongoose
  .connect(dbString)
  .then(() => {
    console.log("Successfully connected to DB");
  })
  .catch((err) => {
    console.error("Error connecting to DB:", err);
  });
