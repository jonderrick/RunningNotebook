import express from "express";
import type { Request, Response } from "express";
import { runRoutes, defaultRoutes } from "./routes";

// Express setup
const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/runs", runRoutes);
app.use("/", defaultRoutes);

app.listen(PORT, () => {
  console.log(`RunningNotebook API has been started on port ${PORT}.`);
});
