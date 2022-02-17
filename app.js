const cors = require("cors")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3001

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true}));
app.use(cors())

app.get("/", (req ,res)=>{
headers={"http_status":200, "cache-control": "no-cache"}
body={"status": "available"}
res.status(200).send(body)
})

app.get("/football", (req ,res)=>{
headers={"http_status":200, "cache-control": "no-cache"}
body=
[
  {
    "name": "AIK",
    "M": 3,
    "V": 3,
    "O" : 0,
    "F" : 0,
    "points" : 9
  },
  {
    "name":"Hammarby IF",
    "M": 3,
    "V": 1,
    "O" : 3,
    "F" : 0,
    "points" : 6
  },
  {
    "name":"BP",
    "M": 3,
    "V": 1,
    "O" : 2,
    "F" : 0,
    "points": 5
  },
  {  
    "name" : "BK Häcken",
    "M": 3,
    "V": 0,
    "O" : 0,
    "F" : 3,
    "points": 0
  }
  
  
  ]
  res.set('Content-Type', 'application/json');
  res.status(200).send(body)
})

app.listen(PORT , ()=>{
  console.log(`STARTED LISTENING ON PORT ${PORT}`)
});