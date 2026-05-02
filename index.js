require("dotenv").config();
const express = require("express");
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
const database = require("./config/database");
const sytemConfig = require("./config/system");

database.connect();

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

//App local variables
app.locals.prefixAdmin = sytemConfig.prefixAdmin;

route(app);
routeAdmin(app);

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
