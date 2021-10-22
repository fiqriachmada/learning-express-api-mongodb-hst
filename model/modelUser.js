const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    content: {
      type: String,
    },
    nominal: {
      type: Number,
    },
    transactionDate: {
      type: Date,
      default: () => Date.now() + 7 * 60 * 60 * 1000,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("Users", userSchema);
