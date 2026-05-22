const Project = require("../models/Project");

const getProjects = async (req, res) => {
    const projects = await Project.find()

    res.status(200).json({
        projects
    });

}

module.exports = getProjects;