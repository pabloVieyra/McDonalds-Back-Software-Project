import express from "express";
import apiController from "./api";
const routes = () => {
  const router = express.Router();

  router.use("/api", apiController());

  return router;
};

export default routes;
