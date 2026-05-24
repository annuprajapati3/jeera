const express = require("express");
const router = express.Router();

const register = require("../controllers/register");
const login = require("../controllers/UserLogin");
const createProject = require("../controllers/createProjects");
const getProjects = require("../controllers/getProject");
const deleteProject = require("../controllers/deleteProject");
const updateProject = require("../controllers/updateProject");
const auth = require("../middleware/Authentication");
const authorization = require("../middleware/Authorization");
const createorg = require("../controllers/CreateOrg");
const addMember = require("../controllers/addMember");
const getOrganizations = require("../controllers/getOrganizations");
const getMembers = require("../controllers/getMembers");

router.post("/register", register);
router.post("/login", login);
router.post("/createprojects", auth, createProject);
router.get("/accessprojects", auth, getProjects);
router.delete("/deleteprojects/:id", auth, authorization, deleteProject);
router.put("/updateprojects/:id", auth, authorization, updateProject);
router.post("/createorg", auth, createorg);
router.post("/addmember", auth, authorization, addMember);
router.get("/organization/all",auth,getOrganizations);

router.get("/member/all",auth,getMembers);
module.exports = router;