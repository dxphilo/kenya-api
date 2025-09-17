import express from "express";
import cors from "cors";
import { json as bodyParser } from "body-parser";
import compression from "compression"; // compresses requests
import cron from "node-cron";

import env from "./env";
import countryController from "./controllers/country";
import countyController from "./controllers/counties";
import postcodeController from "./controllers/postal_codes";
import wardsController from "./controllers/wards";
import health_check, { pingHealthEndpoint } from "./controllers/health_check";
import townsController from "./controllers/towns";
import universityController from "./controllers/universities";
import tribesController from "./controllers/tribes";
import hospitalsController from "./controllers/hospitals";
import banksController from "./controllers/banks";
import { loggingMiddleware } from "./middlewares/loggingMiddleware";

const app = express();
const router = express.Router();

// Middlewares
app.set("port", env.port);
app.use(loggingMiddleware);
app.use(cors());
app.use(compression());
app.use(bodyParser());

// Controllers
router.use("/health", health_check);
router.use("/county", countyController);
router.use("/info", countryController);
router.use("/wards", wardsController);
router.use("/postal_stations", postcodeController);
router.use("/towns", townsController);
router.use("universities", universityController);
router.use("/tribes", tribesController);
router.use("/hospitals", hospitalsController);
router.use("/banks", banksController);

// Mount the router under /api/v1/
app.use("/api/v1", router);

// Skip cron job in CI to prevent blocking workflows; otherwise,
// schedule task to run every 4 minutes
if (process.env.CI !== "true") {
  cron.schedule("*/4 * * * *", async () => {
    await pingHealthEndpoint();
  });
}

export default app;
