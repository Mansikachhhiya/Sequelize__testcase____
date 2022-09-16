const {Router} =require("express");
const controllers= require("../controllers")
const router = Router();

router.post('/users', controllers.createUser)

module.exports = router