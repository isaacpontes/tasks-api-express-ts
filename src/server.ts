import express from "express";
import { router } from "./routes";
import { errorHandlerMiddleware } from "./middlewares/error-handlers";

const app = express();

app.use(express.json());

app.use("/api", router);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`));