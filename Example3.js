const express = require("express");
const app = express();

app.use(express.json());   

//get request
app.get("/login", (req, res) => {
  const uname = req.query.uname;  //.query.
  const upwd = req.query.upwd;
  if (uname === "test" && upwd === "test123") {
    res.json({ message: "Login Success" });
  } else {
    res.json({ message: "Login Fail" });
  }
});


app.listen(8080, () => {
  console.log("server listening the port no.8080");
});
