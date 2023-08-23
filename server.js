const express = require("express");
const cors=require("cors");
const app = express();

app.use(cors());

//parse requests of app/json
app.use(express.json());

//parse requets of app/x-www-form-url-encoded
app.use(express.urlencoded({extended:true}))

//Simple route
app.get("/",(req, res) => {
    res.json({message:"Welcome to Sidehustle node REST API with express."});
  }
);

require("./src/routes/user.routes")(app);

//set port listen for requests
const PORT=process.env.PORT||3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
