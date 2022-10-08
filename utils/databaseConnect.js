const mongoose = require("mongoose");

databaseConnect = () => {
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log(`Mongoose connection is successfully`);
  });
};

module.exports = databaseConnect;
