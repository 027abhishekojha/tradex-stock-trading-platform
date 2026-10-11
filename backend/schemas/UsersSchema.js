const { Schema } = require("mongoose");
const bcrypt =  require("bcrypt");

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

UsersSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {UsersSchema};