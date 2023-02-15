const { default: mongoose } = require("mongoose");

const userScema = mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true 
  },

  email: {
    required: true,
    type: String,
    unique: true 
  },
  password: {
    required: true,
    type: String,
  },
  profilepic: {
    default: "",
    type: String,
  },
});

const UserModel = mongoose.model("user", userScema);
module.exports = { UserModel };
