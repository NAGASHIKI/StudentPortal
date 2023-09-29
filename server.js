// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
// eslint-disable-next-line no-undef
const bodyParser = require("body-parser");
// eslint-disable-next-line no-undef
const cors = require("cors");

// eslint-disable-next-line no-undef
const mongooseConnection = require("./config/db.conf");

// Use the urlencoded parser with the extended option set to true
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello, World!" });
});

app.use("/api/auth", require("./app/routes/authRoute"));

app.use("/api/user", require("./app/routes/userRoute"));

app.use("/api/teacher", require("./app/routes/teacherRoute"));

app.use("/api/student", require("./app/routes/studentRoute"));

app.use("/api/admin", require("./app/routes/adminRoute"));

app.use("/api/announcement", require("./app/routes/announcementRoute"));



mongooseConnection();
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});


