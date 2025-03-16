const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const ListingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        filename: { type: String, required: true },
        url: { type: String, required: true }
    },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true }
});

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
