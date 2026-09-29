const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name : {type : String, unique : true},
    qty : Number,
    price : Number,
    mode : String,
});

module.exports = {OrdersSchema};