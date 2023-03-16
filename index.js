const express = require("express");
const app = express();

app.use((req,res,next) => {
  res.setTimeout(5000,() => {
    return res.status(408).json({messgae: "timeout response"});
  });
  next();
})

const asyncWork = () => {
return new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve({id: 1});
  },10000);
});
};

app.get("/", async(req,res) => {
  const data = await asyncWork();
  if(res.writableEnded || res.writableFinished || res.headersSent){
    console.log("response timed out");
  }else{
    res.json(data);
  }
})

app.listen(4040,() => {
  console.log("server running on port 4040");
})