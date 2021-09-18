const asyncHandler = require("express-async-handler");
const Garment = require("../models/garmentModel");

const getGarments = asyncHandler(async (req, res) => {
  const items = await Garment.find({});
  res.json(items);
});

module.exports = {
  getGarments,
};
