import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "./database/db.js";
import productRoutes from "./routes/productRoutes.js";
import shopifyCategoriesRoutes from "./routes/shopifyCategoriesRoutes.js";
// import { errorMiddleware } from "./middlewares/error.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRoutes);
app.use("/api/shopifycategories", shopifyCategoriesRoutes);

const PORT = 3000;

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("✅ Connected to PostgreSQL via Prisma");
    console.log(`🚀 Server running on port ${PORT}`);
  } catch (error) {
    console.log("Database Connection Error:", error);
  }
});
