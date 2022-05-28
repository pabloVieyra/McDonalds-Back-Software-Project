import { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
export const ProductTags = [
  "Promociones",
  "McCombos",
  "McOfertas",
  "Sandwiches & Snacks",
  "Cajita Feliz",
  "Acompañamientos",
  "Postres",
  "Bebidas Frias y Calientes",
  "Ensaladas",
  "Desayunos y Meriendas",
];

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      enum: ProductTags,
      required: true,
    },
  ],
});
ProductSchema.plugin(uniqueValidator);
export default ProductSchema;
