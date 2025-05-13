import prisma from "../database/db.js";

// const getAllProducts = async () => {
//     let products =  await prisma.product.findMany({
//       include: {
//         category: {select: { name: true },},
//       },
//     });

//     if(products.length > 0){
//         products = products.map(async (p) => {

//           let productImages =  await prisma.productImage.findFirst({  where: { productId: parseInt(p.id) }});

//             return {...p, shopifyPrice:p.shopifyPrice.toFixed(2), shopifyComparePrice:p.shopifyComparePrice.toFixed(2), image:productImages}
//         })
//     }

//     return products;
// };

// const getAllProducts = async () => {
//   let products = await prisma.product.findMany({
//     include: {
//       category: { select: { name: true } },
//     },
//   });

//   if (products.length > 0) {
//     products = await Promise.all(
//       products.map(async (p) => {
//         let productImage = await prisma.productImage.findFirst({
//           where: { productId: parseInt(p.id) },
//         });

//         return {
//           ...p,
//           shopifyPrice: p.shopifyPrice.toFixed(2),
//           shopifyComparePrice: p.shopifyComparePrice.toFixed(2),
//           image: productImage.imageUrl,
//         };
//       })
//     );
//   }

//   return products;
// };

const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: { productImages: true, category: true },
  });
};

const getProduct = async (id) => {
  let product = await prisma.product.findFirst({
    where: { id: parseInt(id) },
  });

  let productImages = await prisma.productImage.findFirst({
    where: { productId: parseInt(product.id) },
  });

  product.images = [productImages.imageUrl];
  return {
    ...product,
    shopifyPrice: product.shopifyPrice.toFixed(2),
    shopifyComparePrice: product.shopifyComparePrice.toFixed(2),
  };
};

// const createProduct = async (data) => {
//   return await prisma.product.create({
//     data: {
//       shopifyProductId: data.shopifyProductId,
//       title: data.title,
//       description: data.description,
//       sku: data.sku,
//       shopifyPrice: data.shopifyPrice,
//       shopifyComparePrice: data.shopifyComparePrice,
//       stock: data.stock,
//       categoryId: data.categoryId,
//       status: data.status || 'ACTIVE',
//       brand: data.brand,
//       mpn: data.mpn,
//       isbn: data.isbn,
//       ean: data.ean,
//       productOptions: data.productOptions,
//       package: data.package,
//     },
//   });
// };
 const createProduct = async (data, productImages) => {
  // const { productImages, ...productData } = data;
  return await prisma.product.create({
    data: {
      ...data,
      
      productImages: {
        create: productImages || [],
      },
    },
    include: { productImages: true },
  });
};

const updateProduct = async (id, data, images) => {
  const product = await prisma.product.update({
    where: { id: id },
    data: data,
  });

  const productImage = await prisma.productImage.findFirst({
    where: { productId: id },
  });
  if (productImage) {
    await prisma.productImage.update({
      where: { id: productImage.id },
      data: { imageUrl: images[0] },
    });
  }
  return product;
};

const deleteProduct = async (id) => {
  try {
    const deletedItem = await prisma.product.delete({
      where: { id: id },
    });
    return deletedItem;
  } catch (error) {
    throw new Error("Error: " + error.message);
  }
};

const getProductById = async (id) => {
  let product = await prisma.product.findFirst({
    where: { id: parseInt(id) },
    include: { productImages: true },
  });

  return {
    ...product,
    shopifyPrice: product.shopifyPrice.toFixed(2),
    shopifyComparePrice: product.shopifyComparePrice.toFixed(2),
  };
};

const getSyncingProducts = async () => {
  let products = await prisma.product.findMany({
    where: {
      syncProduct: {
        none: {}, // No related EbayProduct exists
      },
    },
    include: {
      category: { select: { name: true } },
      productImages: true,
    },
  });

  //const products = await prisma.$queryRaw`SELECT Product.* FROM Product LEFT JOIN SyncProduct ON Product.id = SyncProduct.productId WHERE SyncProduct.productId IS NULL`;

  return products;
};

export default {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getSyncingProducts,
};
