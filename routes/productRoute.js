const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// Products route
router
  .route("/products")
  .post(productController.createProduct)
  .get(productController.getProducts);
router
  .route("/product/:id")
  .get(productController.getProductsById)
  .put(productController.putUpdateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
