const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
    
    const { name, email, password ,role} = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        });
    }

        
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
   
        
    const user = new User({
        name,
        email,
        password: hashedPassword,
        role
    });
    await user.save();

        
    
    res.status(200).json({
        message: "User registered successfully",
        
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
    
};

module.exports =  register ;