const Organization = require("../models/Organization");
const User = require("../models/User");
const createOrg = async (req, res) => {
    const { name } = req.body;  
    console.log(req.user.id);
    const organization = await Organization.create({
        name,
        admin: req.user.id,
        members: [req.user.id]
    });

    await User.findByIdAndUpdate(req.user.id, {
        organization: organization._id
    });

    res.status(201).json({
        organization
    });
}
module.exports = createOrg;