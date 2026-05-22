const Project = require("../models/Project");

const updateProject = async (req, res) => {
    const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json({
        updatedProject
    });
}
module.exports = updateProject;