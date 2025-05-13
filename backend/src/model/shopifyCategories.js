import prisma from "../database/db.js";

const createCategory = async (data) => {
  // console.log(data, "data");
  return await prisma.shopifyCategory.create({ data });
};

const getAllShopifyCategories = async () => {
  return await prisma.shopifyCategory.findMany({
    include: { products: true },
  });
};

const getShopifyCategoryById = async (id) => {
  return await prisma.shopifyCategory.findUnique({
    where: { id },
    include: { products: true },
  });
};

const updateShopifyCategory = async (id, data) => {
  return await prisma.shopifyCategory.update({ where: { id }, data });
};

const deleteShopify = async (id) => {
  return await prisma.shopifyCategory.delete({ where: { id } });
};

export default {
  createCategory,
  getAllShopifyCategories,
  getShopifyCategoryById,
  updateShopifyCategory,
  deleteShopify,
};
