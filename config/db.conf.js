// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
const mongoAtlasUri = `mongodb://127.0.0.1:27017/UniVerse`;
function mongooseConnection() {
  try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
  } catch (e) {
    console.log("could not connect");
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
}
// eslint-disable-next-line no-undef
module.exports = mongooseConnection;
