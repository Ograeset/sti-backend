const cors = require("cors")
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000

app.use('/healthcheck', require('./routes.healtcheck.routes'));
appp.use(express.urlencoded({ extended: true}));
app.use(cors())

appp.get("/", (req ,res)=>{
headers={"http_status":200, "cache-control": "no-cache"}
body={"status": "available"}
res.status(200).send(body)
})

app.listen(PORT , ()=>{
  console.log('STARTED LISTENING ON PORT ${PORT}')
});