const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res, next) => {
  try {
    const data = await User.create(req.body);
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
exports.putUserJwtToken = async (req, res, next) => {
  try {
    const email = req.query.email;
    const token = await jwt.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: "3d",
    });
    const result = await User.updateOne({ email: email }, { token: token });
    res.status(200).json({
      status: "success",
      message: "Successfully updated user",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update user",
      error: error.message,
    });
  }
};
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
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
exports.patchUser = async (req, res, next) => {
  try {
    const filters = { ...req.query };
    const cursor = req.body;
    const result = await User.updateOne(filters, cursor);
    res.status(200).json({
      status: "success",
      message: "Successfully updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update user",
      error: error.message,
    });
  }
};
/*  exports.getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await getUserByIdService(id, req.body);
      res.status(200).json({
        status: "success",
        message: "Successfully updated user",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: "Couldn't update user",
        error: error.message,
      });
    }
  }; */
/* exports.deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await deleteUserService(id);
      res.status(200).json({
        status: "success",
        message: "Successfully deleted one user",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: "Couldn't delete user",
        error: error.message,
      });
    }
  }; */
