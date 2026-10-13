const { UsersModel } = require("../model/UsersModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt  = require("bcrypt");

const Signup = async (req, res) => {
    try {
        const { username, email, password, createdAt } = req.body;

        const existingUser = await UsersModel.findOne({ email });

        if (existingUser) {
            return res.json({
                message: `User ${username} already exist!!`,
                success: false
            });
        }


        const user = await UsersModel.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);

        res.cookie("token", token, { httpOnly: false, maxAge: 3 * 24 * 60 * 60 * 1000 });

        return res.status(201).json({
            message: "User Signed in Successfully",
            success: true,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                password: user.password,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

const Login = async (req, res) => {
    try {
        const { password, email } = req.body;

        if (!email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const user = await UsersModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "Incorrect password or email" });
        }


        const auth = await bcrypt.compare(password, user.password);

        if(!auth){
            return res.json({ status : false, message: "Incorrect password or email"});
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: 3 * 24 * 60 * 60 * 1000,
        });

        // Added success: true so frontend condition passes
        return res.status(201).json({
            message: "User logged in successfully",
            success: true,
            user: user.username,
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

module.exports = { Signup, Login };