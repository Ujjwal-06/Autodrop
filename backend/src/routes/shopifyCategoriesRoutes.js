import express from "express";
import {
  createShopifyCategory,
  deleteShopifyCategory,
  getAllShopifyCategories,
  getShopifyCategoryById,
  updateShopifyCategory,
} from "../controller/categoryController.js";

const router = express.Router();

router.post("/new", createShopifyCategory);
router.get("/get", getAllShopifyCategories);
router.get("/:id", getShopifyCategoryById);
router.put("/:id", updateShopifyCategory);
router.delete("/:id", deleteShopifyCategory);

export default router