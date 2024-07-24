const mongoose = require('mongoose')
//Forma del objeto de la DB
const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String,
    }
)
module.exports = mongoose.model('Book', bookSchema)