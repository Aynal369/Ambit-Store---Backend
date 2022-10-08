const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//User routes
router
  .route("/users")
  .post(userController.createUser)
  .put(userController.putUserJwtToken)
  .get(userController.getUsers)
  .patch(userController.patchUser);
/* router
  .route("/:id")
  .delete(userController.deleteUser)
  .get(userController.getUserById)
  .put(userController.putUser);
 */

module.exports = router;
