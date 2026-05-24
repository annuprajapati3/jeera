const User = require("../models/User");

const getMembers = async (req, res) => {

    try {

        const members = await User.find({
            role: "member"
        }).select("_id name email role");

        res.status(200).json({
            success: true,
            members
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = getMembers;