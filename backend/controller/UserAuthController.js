const { UsersModel } = require("../model/UsersModel");

const Signup = async (req, res) => {
    try {
        const { username, email, password, createdAt } = req.body;
        console.log("consoled log : ",username, email, password, createdAt );
        
        const existingUser = await UsersModel.findOne({ email });
        console.log("existingUser :", existingUser);

        if (existingUser) {
            return res.json({
                message: `User ${username} already exist!!`,
                success: false
            });
        }

        const user = await UsersModel.create({ email, password, username, createdAt });
        return res.status(201).json({ 
            message: "User Signed in Successfully", 
            success: true, 
            user : {
                _id: user._id,
                username : user.username,
                email : user.email,
                password : user.password,
                createdAt : user.createdAt,
            },

        });
    } catch (error) {
        console.error(error);
        
        // res.status(500).json({
        //     success: false,
        //     message: "Internal Server Error",
        // });
    }
}

module.exports = { Signup };