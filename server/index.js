const express = require("express");
const app = express();
const bc = require("./controllers/controller");
const bodyparser = require("body-parser")
app.use(bodyparser.json());

app.get("/api/books",bc.read)
app.post("/api/books",bc.create)
app.put("/api/books/:id", bc.update)
app.delete("/api/books:id",bc.delete)

const port = 4000
app.listen(port,()=>console.log(`listening on ${ port}`))