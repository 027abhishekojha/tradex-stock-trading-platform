const jwt = require("jsonwebtoken");
const { UsersModel } = require("../model/UsersModel");
require("dotenv").config();

// const userVerification = (req,res) =>{
//     const token = req.cookies.token;
//
//     if(!token){
//         return res.json({status : false});
//     }
//
//     jwt.verify(token, process.env.JWT_TOKEN, async(err, data) => {
//         if(err){
//             return res.json({status : false});
//         } else {
//             const user = await UsersModel.findById(data.id);
//             if(user) return res.json({status : true, user : user.username });
//             else return res.json({ status: false });
//         }
//     });
// }

const authMiddleware  = async  (req,res, next) => {
    const authorization = req.headers.authorization

    if(
        !authorization ||
        !authorization.startsWith("Bearer ")){
        return res.status(401).json({message : 'Authorization Failed'});
    }

    const token = authorization.slice(7);

    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        const user = await UsersModel.findById(decode.id);

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        req.user = user;
        next();
    }catch (e) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = {authMiddleware};
