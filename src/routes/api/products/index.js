import express from "express";
import mongoose from "mongoose";
import ProductSchema from "../../../models/product.model";
import Response from "../../../responses/Response";

const productsController = () => {
  const router = express.Router();

  const ProductModel = mongoose.model("Product", ProductSchema);

  router.post("/", async (req, res) => {
    const Product = new ProductModel({
      name: req.body?.name,
      description: req.body?.description,
      price: req.body?.price,
      image: req.body?.image,
      tags: req.body?.tags,
    });
    try {
      const productSaved = await Product.save();
      const success = productSaved === Product;
      if (!success)
        res.status(500).send(Response(false, "No se pudo guardar el objeto"));
      res.status(201).send(Response(true, "", productSaved));
    } catch (error) {
      res.status(500).send(Response(false, error, error));
    }
  });

  router.delete("/:id", async (req, res) => {
    if (!req.params?.id)
      res.status(404).json(Response(false, "ID NO ENCONTRADO"));
    try {
      const response = await ProductModel.findByIdAndDelete(req.params?.id);
      if (response) {
        res.status(200).json(Response(true, "", response));
      } else {
        res
          .status(200)
          .json(Response(false, "NO SE ENCONTRO PRODUCTO CON ESE ID"));
      }
    } catch (err) {
      res.status(500).json(Response(false, err, err));
    }
  });
  router.get("/:id", async (req, res) => {
    try {
      const response = await ProductModel.find({ _id: req.params?.id });
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(Response(false, "Error"));
    }
  });

  router.get("/", async (req, res) => {
    const insertPriceFilters = () => {
      let query = {};
      if (req.query?.initial_price)
        query = {
          price: { $gte: req.query?.initial_price || 0 },
        };

      if (req.query?.final_price)
        query = {
          price: { $lte: req.query?.final_price || 0 },
        };

      if (req.query?.initial_price && req.query?.final_price)
        query = {
          $and: [
            {
              price: { $gte: req.query?.final_price || 0 },

              price: { $lte: req.query?.final_price || 0 },
            },
          ],
        };

      return query;
    };

    try {
      const response = await ProductModel.find({
        name: req.query?.name || /.*/,
        ...insertPriceFilters(),
      });
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(Response(false, "Error"));
    }
  });

  return router;
};

export default productsController;
