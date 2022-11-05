const Product = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  try {
    const data = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
exports.getProducts = async (req, res, next) => {
  try {
    const users = await Product.find({});
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
exports.getProductsById = async (req, res, next) => {
  try {
    const result = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Successfully updated user",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
exports.putUpdateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await Product.findByIdAndUpdate(id, body);
    res.status(200).json({
      status: "success",
      message: "Successfully updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Product.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Successfully deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
