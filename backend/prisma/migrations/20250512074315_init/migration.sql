/*
  Warnings:

  - A unique constraint covering the columns `[shopifyCategoryId]` on the table `ShopifyCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ShopifyCategory_shopifyCategoryId_key` ON `ShopifyCategory`(`shopifyCategoryId`);
