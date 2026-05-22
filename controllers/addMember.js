const User = require("../models/User");
const Organization = require("../models/Organization");
const addMember = async (req, res) => {
    const { organizationId, memberId } = req.body;
    const organization = await Organization.findById(organizationId);
    if (!organization) {
        return res.status(400).json({
            message: "Organization not found"});
    }
    if (organization.members.includes(memberId)) {
        return res.status(400).json({
            message: "Member already exists in the organization"
        });
    }

    organization.members.push(memberId);
    await organization.save();
    await User.findByIdAndUpdate(memberId, {
        organization: organizationId
    });
    return res.status(200).json({
        result: "Member added successfully"
    })
}
module.exports = addMember;