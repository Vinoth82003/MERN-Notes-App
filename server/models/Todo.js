const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    createdAt: {
      type: String,
    },
    lastUpdate: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: "__v" }
);

module.exports = mongoose.model("Todo", TodoSchema);
