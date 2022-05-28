import express from "express";
import productsController from "./products";
const apiController = () => {
  const router = express.Router();

  router.use("/products", productsController());

  return router;
};

export default apiController;
