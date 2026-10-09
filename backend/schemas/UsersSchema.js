const { Schema } = require("mongoose");

const UsersSchema = new Schema({
    username : {
        type : String,
        required : [true, "Your username is required"],
        unique : true
    },
    email : {
        type : String,
        required : [true, "Your email is required"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Password is required"],
    },
    createdAt : {
        type : Date,
        default : new Date(),
    }
});

module.exports = {UsersSchema};