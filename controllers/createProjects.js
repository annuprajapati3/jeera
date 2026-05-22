const Project = require("../models/Project");

const createProject = async (req, res) => {
    const { title, description, organization, members } = req.body;
    const project = await Project.create({
            title,
            description,
            organization,
            members,
            createdBy: req.user.id
    });
    res.status(200).json({
        project
    });
}
module.exports = createProject;