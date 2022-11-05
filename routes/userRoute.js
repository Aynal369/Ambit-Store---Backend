const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//User routes
router
  .route("/users")
  .post(userController.createUser)
  .get(userController.getAllUser);
router
  .route("/users/:email")
  .get(userController.getUserByEmail)
  .put(userController.putUserJwtToken)
  .patch(userController.patchUserRole);

module.exports = router;
