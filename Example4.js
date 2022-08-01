const express = require("express");
const app = express();
app.use(express.json());

//parameter in url//res.params.uname
app.get("/login/:uname/:upwd", (req, res) => {   //http://localhost:8080/login/test1/test123
  req.params.uname === "test" && req.params.upwd === "test123"
    ? res.json({ message: "Login Success" })
    : res.json({ message: "Login Fail" });

  // if(req.params.uname==="test" && req.params.upwd==="test123"){
  //   res.json({message:"Login successf"})
  // }
  //   else {
  //     res.json({message:"Loginn fail"})
  //   }
  
});

app.listen(8080, () => {
  console.log("server listening the port no.8080");
});
