const {Router} =require("express");
const controllers= require("../controllers")
const router = Router();

router.post('/users', controllers.createUser)
// outer.get('/users',controllers.getAllUser())
// router.get('/users/:id',controllers.getUserBYId())

module.exports = router