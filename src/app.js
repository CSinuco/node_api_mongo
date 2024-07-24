const express = require('express')
const mongoose = require('mongoose')
const {config } = require('dotenv')
const bodyParcer = require('body-parser')
const bookRoutes = require('./routes/book.routes')
config()



//Usamos express midleware 
const app = express();
app.use(bodyParcer.json())
//Conexion a la base de datos
mongoose.connect(process.env.MONGO_URL, {  
    dbName: process.env.MONGO_DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,})
const db = mongoose.connection;

app.use('/books', bookRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor iniciado en ${port}`)
})