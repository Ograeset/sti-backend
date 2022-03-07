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
    "position": "#",
    "name": "Lag",
    "m":"Spelade Matcher",
    "v":"Vinster",
    "o":"Oavgjorda",
    "f":"Förluster",
    "points":"Poäng"

  },

  {
    "position":1,
    "name": "AIK",
    "m": 3,
    "v": 3,
    "o" : 0,
    "f" : 0,
    "points" : 9
  },
  {
    "position":2,
    "name":"Hammarby IF",
    "m": 3,
    "v": 1,
    "o" : 3,
    "f" : 0,
    "points" : 6
  },
  {
    "position":3,
    "name":"BP",
    "m": 3,
    "v": 1,
    "o" : 2,
    "f" : 0,
    "points": 5
  },
  {  
    "position": 4,
    "name" : "BK Häcken",
    "m": 3,
    "v": 0,
    "o" : 0,
    "f" : 3,
    "points": 0
  }
  
  
  ]
  res.set('Content-Type', 'application/json');
  res.status(200).send(body)
})

app.listen(PORT , ()=>{
  console.log(`STARTED LISTENING ON PORT ${PORT}`)
});