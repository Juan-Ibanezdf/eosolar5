// import morgan from "morgan";
// import { AppDataSource } from "./database/data-source";
// import express from "express";
// import "reflect-metadata";
// import cookieParser from "cookie-parser";
// import trimString from "../app/middleware/trimString";
// import routes from "../app/routes/routes";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();

// // create and setup express app
// const app = express();
// app.use(morgan("dev"));

// // Configura o body-parser para fazer o parse do corpo da requisição como JSON
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.set("trust proxy", true);

// app.use(express.static("public"));

// // middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(trimString);

// // Configuração de CORS
// app.use(
//   cors({
//     origin: "eosolar-client-1:3000", // Origem do frontend
//     credentials: true,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
//     optionsSuccessStatus: 200,
//   })
// );

// // rotas
// app.use("/", routes);

// // establish database connection
// AppDataSource.initialize()
//   .then(() => {
//     console.log("Data Source has been initialized!");
//   })
//   .catch((err) => {
//     console.error("Error during Data Source initialization:", err);
//   });

// // start express server
// app.listen(3001, () => {
//   console.log("Server running on port 3001!");
// });

import morgan from "morgan";
import { AppDataSource } from "./database/data-source";
import express from "express";
import "reflect-metadata";
import cookieParser from "cookie-parser";
import trimString from "../app/middleware/trimString";
import routes from "../app/routes/routes";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// create and setup express app
const app = express();
app.use(morgan("dev"));

// Configura o body-parser para fazer o parse do corpo da requisição como JSON
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.set("trust proxy", true);

app.use(express.static("public"));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(trimString);

// Configuração de CORS
app.use(
  cors({
    origin: "*", // Permite qualquer origem
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  })
);

// rotas
app.use("/", routes);

// establish database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// start express server
app.listen(3001, () => {
  console.log("Server running on port 3001!");
});
