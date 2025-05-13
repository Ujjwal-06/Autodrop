import shopifyCategories from "../model/shopifyCategories.js";

const createShopifyCategory = async (req, res) => {
  try {
    const category = await shopifyCategories.createCategory(req.body);

    if (!category)
      return res.status(500).json({ success: false, message: category });
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
};

const getAllShopifyCategories = async (req, res) => {
  try {
    const categories = await shopifyCategories.getAllShopifyCategories();
    res.status(200).json({ message: true, data: categories });
  } catch (error) {}
};

const getShopifyCategoryById = async (req, res) => {
  try {
    const category = await shopifyCategories.getShopifyCategoryById(
      req.params.id
    );
    res.status(200).json({ message: true, data: category });
  } catch (error) {}
};

const updateShopifyCategory = async (req, res) => {
  try {
    const updated = await shopifyCategories.updateShopifyCategory(
      Number(req.params.id),
      req.body
    );
    res.json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update category", details: error });
  }
};

const deleteShopifyCategory = async (req, res) => {
  try {
    await shopifyCategories.deleteShopify(Number(req.params.id));
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete category", details: error });
  }
};

export {
  createShopifyCategory,
  getAllShopifyCategories,
  getShopifyCategoryById,
  updateShopifyCategory,
  deleteShopifyCategory,
};
