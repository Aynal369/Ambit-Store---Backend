require("dotenv").config();
const databaseConnect = require("./utils/databaseConnect");
const app = require("./app");

databaseConnect();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
