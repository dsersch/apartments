const
mongoose = require('mongoose')
apartmentSchema = new mongoose.Schema({
    
    price: Number,
    bedrooms: Number,
    bathrooms: Number,
    pets: Boolean,
    location: String,

},{timestamp:true})

module.exports = mongoose.model('Apartment', apartmentSchema)