import express from "express";

const routes = () => {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send("Hola");
  });

  return router;
};

export default routes;
