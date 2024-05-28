const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  price: Number,
  color: String,
});

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
    type: [ProductSchema],
    default: [],
  },
});

const USER_MODEL = model("user", UserSchema);

module.exports = USER_MODEL;
