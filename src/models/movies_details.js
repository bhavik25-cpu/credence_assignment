const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String, 
        unique: [true, "Movie name must be unique"],
        require: true,
        minlength: 3,
        maxlength: 50
    },
    img: {
        type: String
    },
    summary: {
        type: String,
        maxlength: 500
    }
})

// We will create a new collection
const movie_details = new mongoose.model('movie_detail', movieSchema);

module.exports = movie_details;