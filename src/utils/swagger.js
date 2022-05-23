import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Proyecto de soft API",
      version: "0.1.0",
      description: "Documentacion para proyecto de soft",
    },
    servers: [
      {
        url: "http://localhost:3000/books",
      },
    ],
  },
  apis: ["./routes/books.js"],
};

const specs = swaggerJSDoc(options);

export default specs;
