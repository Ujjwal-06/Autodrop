import ProductModel from "../model/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const id = req.query.id || 0;
    const product = await ProductModel.getProduct(id);

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const bodyData = req.body;

    bodyData.categoryId = bodyData.categoryId
      ? parseInt(bodyData.categoryId)
      : 0;
    bodyData.stock = bodyData.stock ? parseInt(bodyData.stock) : 0;

    const {  productImages, ...data } = bodyData;

    const newProduct = await ProductModel.createProduct(data, productImages);

    res.status(200).json({
      status: "success",
      data: newProduct,
      message: "Product created Successfully.",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const bodyData = req.body;

    bodyData.categoryId = bodyData.categoryId
      ? parseInt(bodyData.categoryId)
      : 0;

    bodyData.stock = bodyData.stock ? parseInt(bodyData.stock) : 0;

    const { id, images, ...data } = bodyData;

    const product = await ProductModel.updateProduct(id, data, images);

    res.status(200).json({
      status: "success",
      data: product,
      message: "Product updated successfully.",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const bodyData = req.body;
    const deletedItem = await ProductModel.deleteProduct(bodyData.id);
    res.status(200).json({
      status: "success",
      data: deletedItem,
      message: "Product deleted successfully.",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.getProductById(id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
