const CloudinaryImage = require('./../models/cloudinary-image');

exports.getAllImages = async (req, res) => {
  try {
    const images = await CloudinaryImage.find();

    res.status(200).json({
      status: 'success',
      results: images.length,
      data: {
        images
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
}
exports.deleteById = async (req, res) => {
  try {

    const id = req.params.imageId;
    const result = await CloudinaryImage.findByIdAndDelete(id);


    res.status(200).json(result);

  } catch (err) {
    res.status(500).json(err);
  }
}
