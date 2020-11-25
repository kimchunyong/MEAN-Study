const express = require('express')
const dotenv = require('dotenv')
const app = express()
const DB_URL = "mongodb://localhost:5000/"
const port = 5000

const moogoose = require('mongoose')

dotenv.config()

moogoose.connect(process.env.DB_INFO, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify:false,
})
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! ~ 안녕하세요.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})