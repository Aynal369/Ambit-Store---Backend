const User = require("../models/User");
const jwt = require("jsonwebtoken");
// New user post
exports.createUser = async (req, res, next) => {
  try {
    const data = await User.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully create a new user",
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
// User role get
exports.getAllUser = async (req, res, next) => {
  try {
    const filters = { ...req.query };
    // sort , page , limit ==> exclude
    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);
    const queries = [];
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fieldsBy = req.query.fields.split(",").join(" ");
      queries.fieldsBy = fieldsBy;
    }
    const users = await User.find(filters)
      .select(queries.fieldsBy)
      .sort(queries.sortBy);
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
/* ======================== Admin =============================== */
// Admin get user by email
exports.getUserByEmail = async (req, res, next) => {
  try {
    email = req.params.email;
    const users = await User.findOne({ email: email });
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
exports.patchUserRole = async (req, res, next) => {
  try {
    email = req.params.email;
    const body = req.body;
    const result = await User.updateOne({ email: email }, body);
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

exports.putUserJwtToken = async (req, res, next) => {
  try {
    email = req.params.email;
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
      expiresIn: "7d",
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
