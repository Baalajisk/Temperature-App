const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Temperature = require("./src/Temperature");

const app =express();

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));

app.post("/authenticate",(req,res)=>{
    // console.log(req.body);\
    if(req.body.uName !==" " || req.body.uName != null){
        res.json({authenticated :true });
    
    }else{
        res.json({authenticated :false });
    }
    
});

app.get("/temp",(req,res)=>{

    // console.log(req);
  const {city} = req.query;
  console.log(city);
  Temperature.getTemperature(city)
  .then((data)=>{
      console.log("responsed");
      res.send(data)
    });
});



app.listen(3001,()=>{
    console.log("app running in port 3001");
})