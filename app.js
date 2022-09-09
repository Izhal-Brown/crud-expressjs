const express = require ('express');
const path = require ('path');
const app = express();
// const router = require('./routes')
const productRouter = require('./app/product/routes')
const productRouterV2 = require('./app/product_v2/routes')
// const log = require('./middlewares/logger')
const logger = require('morgan')

// membuat routing langsung
// app.use('/',(req, res) => {
//   res.send({
//     status: 'Succesfully',
//     message: 'Welcome to Express JS Tutorials'
//   })
// }) 

// app.use(log);// memunculkan log di terminal
app.use(logger('dev'));// memunculkan log di terminal
app.use(express.urlencoded({extended: true})); // menangani request body dengan middleware, metode POST
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads'))) //menangani static & download
// app.use(router)// membuat routing menggunakan get dari file lain
app.use('/api/v1',productRouter)
app.use('/api/v2',productRouterV2)
app.use((req, res, next) => { //membuat halaman jika halaman yang dituju ngga ada
  res.status(404)
  res.send({
    status: 'failed',
    message:`Resource ${req.originalUrl} Not Found` 
  })
})

// app.listen(3000, () => console.log('server: http://localhost:3000'))

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App is running at the port ${port}')
})

