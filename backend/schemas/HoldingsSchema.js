const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
    name: {type : String, unique : true},
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = { HoldingsSchema }