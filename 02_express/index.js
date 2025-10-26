import express from "express";

const port = 3000;

const app = express();
app.use(express.json());

let teaData = [];
let nextId = 1;

// add a new tea
app.post("/tea", (req, res) => {
  const { name, price } = req.body;
  const newTea = {
    id: nextId++,
    name,
    price,
  };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// get all teas
app.get("/teas" , (req,res) => {
    res.status(201).send(teaData) 
})



app.listen(port, () => {
  console.log(`App listening on: ${port}`);
});