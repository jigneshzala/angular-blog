const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  desc: String,
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Category = mongoose.model('Cateogry', categorySchema);
module.exports = Category;
