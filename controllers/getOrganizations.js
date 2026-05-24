const Organization = require("../models/Organization");

const getOrganizations = async (req, res) => {

    try {

        const organizations = await Organization.find()
            .select("_id name");

        res.status(200).json({
            success: true,
            organizations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = getOrganizations;