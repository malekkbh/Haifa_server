const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  userID: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  nikNames: {
    type: [String],
    default: [],
  },
  products: {
    type: [
      {
        name: String,
        price: Number,
        color: String,
      }, // product schema
    ],
    default: [],
  },
});

const USER_MODEL = model("user", UserSchema);

module.exports = USER_MODEL;
