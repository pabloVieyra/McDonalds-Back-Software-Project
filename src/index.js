import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import routes from "./routes";
// import specs from "./utils/swagger";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import path from "path";
import specs from "./utils/swagger";

dotenv.config();

const app = express();
const port = 4000 || process.env.PORT;
app.use(cors());
app.use(express.json());
connectDb();

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(routes());

app.listen(process.env.PORT || port, () => {
  console.log(`listening port ${port}`);
});
