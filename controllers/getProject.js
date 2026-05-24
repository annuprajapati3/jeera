const Project = require("../models/Project");

const getProjects = async (req, res) => {

    try {

        const projects = await Project.find()

            .populate("createdBy", "name email role")

            .populate("members", "name email role")

            .populate("organization", "name");

        res.status(200).json({
            success: true,
            projects
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = getProjects;