const express = require("express");
const {
  getCollections,
  createCollections,
  getCollectionById,
  updateCollection,
  deleteCollection,
} = require("../controllers/collectionControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getCollections);
router.route("/create").post(protect, createCollections);
router
  .route("/:id")
  .get(getCollectionById)
  .put(protect, updateCollection)
  .delete(protect, deleteCollection);

module.exports = router;
