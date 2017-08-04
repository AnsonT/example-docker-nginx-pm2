const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('GET /')
  res.send('Hello World!!')
})

app.listen(3000, () => {
  console.log('Hello World started on port 3000')
})