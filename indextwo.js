const express = require("express");

const app = express();
const port = 3000;

app.use((req,res,next)=>{
    console.log("Time:",Date.now())
    next()
}
)

app.get("/user/:id", (req, res,next) => {
  console.log("Request Type: ",req.method)
  next()
},(req,res)=>{
    res.send(req.params.id);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
