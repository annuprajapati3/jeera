const Project = require("../models/Project");
const deleteProject = async (req, res) => {
    console.log(req.params.id);
   await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: "Project deleted"
    });

   
};

module.exports = deleteProject;