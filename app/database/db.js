const { connect } = require("mongoose");
const MONGO_URI = require("../config/config");

/**
 * Initializes MongoDB connection using configs and logs status
 */
const initializeMongoDB = async () => {
  try {
    await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("DB connected");
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = initializeMongoDB;
