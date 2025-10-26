import express from "express";

const hostname = "127.0.0.1";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World : Nodemon attached ");
});

app.listen(port,() => {
    console.log(`App listening on http://${hostname}.com : ${port}`)
})