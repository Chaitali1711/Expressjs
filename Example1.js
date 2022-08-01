const express = require("express");

const app = express();


//assign the port number
app.listen(3005, () => {
  console.log("server listening the port no.3005");
});

app.get("/", (req, res) => {
 res.json({"message":"welcome to module1"});
});


app.get("/products", (req, res) => {
  res.json({ message: "welcome to products get request" });
});

app.post("/", (req, res) => {
  res.json({ message: "wecome to default post request" });
});
app.post("/products", (req, res) => {  //Cannot POST /products
  res.json({ message: "welcome to products post request" });  
});

app.head("/", (req, res) => {
  res.json({ message: "wecome to default head request" });
});
app.head("/products", (req, res) => {
  res.json({ message: "welcome to products head request" });
});

app.delete("/", (req, res) => {
  res.json({ message: "wecome to default delete request" }); //Cannot DELETE 
});
app.delete("/products", (req, res) => {
  res.json({ message: "welcome to products delete request" }); //Cannot DELETE /products
});

