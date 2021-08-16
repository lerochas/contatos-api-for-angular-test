const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

let db = [
  {
    "id": 1,
    "name": "Luffy",
    "email": "luffy@gmail.com",
  },
  {
    "id": 2,
    "name": "Goku",
    "email": "goku@gmail.com",
  },{
    "id": 3,
    "name": "Naruto",
    "email": "naruto@gmail.com",
  }
]

app.get('/contatos', (req, res) => {
  return res.json(db)
})

app.listen(8080, () => {
  console.log('Express started on port 8080')
})