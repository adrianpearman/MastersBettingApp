// NPM Modules
const express = require("express")

// Application Variables
const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send({ data: "kjsdfhksjdfhkjshdf"})
})

app.listen(PORT, (err) => {
  if(!err){
    console.log(`server running on ${PORT}`)
  }else{
    console.log(err)
  }
})