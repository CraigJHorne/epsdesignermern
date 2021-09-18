const express = require("express");
const {
  getItems,
  createItems,
  getItemById,
  updateItem,
  deleteItem,
} = require("../controllers/itemControllers");
const router = express.Router();

router.route("/:id").get(getItems);
router.route("/create").post(createItems);
router.route("/item/:id").get(getItemById).put(updateItem).delete(deleteItem);

module.exports = router;
