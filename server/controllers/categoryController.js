const Category = require("../models/categoryModel");

exports.getCategories = async (req, res) => {
  try {

    const result = await Category.find();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}


exports.addCategory = async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      desc: req.body.desc
    });

    let newCategory = await category.save();
    res.status(201).json({
      data: newCategory
    });

  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

exports.deleteCategory = async (req, res) => {
  try {

    const id = req.params.id;
    const result = await Category.remove({
      _id: id
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Category.findByIdAndUpdate(id, req.body);
    res.status(200).json(result);

  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}
