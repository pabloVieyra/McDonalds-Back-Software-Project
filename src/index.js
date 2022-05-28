import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import routes from "./routes";
import specs from "./utils/swagger";
import dotenv from "dotenv";
import connectDb from "./config/db.js"



const app = express();
const port = 4000;
app.use(cors());

dotenv.config();



connectDb();


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("*", routes());

app.listen(process.env.PORT || port, () => {
  console.log(`listening port ${port}`);
});
