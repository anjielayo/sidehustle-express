const router = require("express").Router();
const userController = require("../controllers/user.controller");

module.exports=app=>{

//create new user
router.post("/", userController.create);

//retrieve all users
router.get("/", userController.findAll);

//retrieve one user with id
router.get("/:id", userController.findOne);

//update a user with id
router.put("/:id", userController.update);

//delete user with id
router.delete("/:id", userController.delete);

app.use("/api/users",router);

};