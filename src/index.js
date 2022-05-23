import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import routes from "./routes";
import specs from "./utils/swagger";

const app = express();
const port = 4000;

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("*", routes());

app.listen(process.env.PORT || port, () => {
  console.log(`listening port ${port}`);
});
