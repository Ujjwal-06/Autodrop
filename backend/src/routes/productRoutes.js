import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";

const router = express.Router();

router.get("/product", getProduct);
router.get("/products", getProducts);
router.post("/product/create", createProduct);
router.post("/product/update", updateProduct);
router.delete("/product/delete", deleteProduct);

export default router;
