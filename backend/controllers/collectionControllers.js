const asyncHandler = require("express-async-handler");
//const { NotBeforeError } = require("jsonwebtoken");
const Collection = require("../models/collectionModel");

const getCollections = asyncHandler(async (req, res) => {
  const collections = await Collection.find({ user: req.user._id });
  res.json(collections);
});

const createCollections = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Please fill all the Fields");
  } else {
    const collection = new Collection({ user: req.user._id, title });

    const createdCollection = await collection.save();

    res.status(201).json(createdCollection);
  }
});

const getCollectionById = asyncHandler(async (req, res) => {
  const collection = await Collection.findById(req.params.id);

  if (collection) {
    res.json(collection);
  } else {
    res.status(404).json({ message: "Collection not found" });
  }
  res.json(collection);
});

const updateCollection = asyncHandler(async (req, res) => {
  const { title } = req.body;

  const collection = await Collection.findById(req.params.id);

  if (collection.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw newError("You can't perform this action");
  }

  if (collection) {
    collection.title = title;

    const updatedCollection = await collection.save();
    res.json(updatedCollection);
  } else {
    res.status(404);
    throw newError("Note not found");
  }
});

const deleteCollection = asyncHandler(async (req, res) => {
  const collection = await Collection.findById(req.params.id);

  if (collection.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw newError("You can't perform this action");
  }

  if (collection) {
    await collection.remove();
    res.json({ message: "Collection Removed" });
  } else {
    res.status(404);
    throw newError("Note not found");
  }
});

module.exports = {
  getCollections,
  createCollections,
  getCollectionById,
  updateCollection,
  deleteCollection,
};
