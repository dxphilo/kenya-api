import express from "express";
import cors from "cors";
import { json as bodyParser } from "body-parser";
import compression from "compression"; // compresses requests
import cron from "node-cron";
import axios from "axios";

import env from "./env";
import countryController from "./controllers/country";
import countyController from "./controllers/counties";
import postcodeController from "./controllers/postal_codes";
import wardsController from "./controllers/wards";
import health_check from "./controllers/health_check";
import townsController from "./controllers/towns";
import universityController from "./controllers/universities";
import tribesController from "./controllers/tribes";
import hospitalsController from "./controllers/hospitals";
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

// Mount the router under /api/v1/
app.use("/api/v1", router);

// Define the health check URL (using the deployed URL from README)
const healthCheckUrl =
  process.env.NODE_ENV === "production"
    ? "https://kenya-api.onrender.com/api/v1/health"
    : "http://localhost:3000/api/v1/health";
// Alternative for local check:
// const port = process.env.PORT || 3000;
// const healthCheckUrl = `http://localhost:${port}/api/v1/health`;

// Schedule the task to run every 4 minutes
cron.schedule("*/4 * * * *", async () => {
  console.log(`[${new Date().toISOString()}] Running health check ping...`);
  try {
    const response = await axios.get(healthCheckUrl);
    console.log(
      `[${new Date().toISOString()}] Health check ping successful. Status: ${
        response.status
      }`
    );
  } catch (error) {
    // Type guard for Axios errors
    if (axios.isAxiosError(error)) {
      console.error(
        `[${new Date().toISOString()}] Health check ping failed: ${
          error.message
        }`,
        {
          status: error.response?.status,
          data: error.response?.data,
          code: error.code,
        }
      );
    } else if (error instanceof Error) {
      console.error(
        `[${new Date().toISOString()}] Health check ping failed with non-Axios error: ${
          error.message
        }`
      );
    } else {
      console.error(
        `[${new Date().toISOString()}] Health check ping failed with unknown error:`,
        error
      );
    }
  }
});

export default app;
