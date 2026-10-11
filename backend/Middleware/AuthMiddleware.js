const jwt = require("jsonwebtoken");
const { UsersModel } = require("../model/UsersModel");
require("dotenv").config();

const userVerification = (req,res) =>{
    const token = req.cookies.token;

    if(!token){
        return res.json({status : false});
    }

    jwt.verify(token, process.env.JWT_TOKEN, async(err, data) => {
        if(err){
            return res.json({status : flase});
        } else {
            const user = await UsersModel.findById(data.id);
            if(user) return res.json({status : true, user : user.username });
            else return res.json({ status: false });
        }
    });
}

module.exports = {userVerification};
