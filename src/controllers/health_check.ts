import { Request, Response, Router } from "express";
import axios from "axios";
import { getCurrentISODate } from "../utilities/util";

const router = Router();

// Define the health check URL (using the deployed URL from README)
export const healthCheckUrl =
  process.env.NODE_ENV === "production"
    ? "https://kenya-api.onrender.com/api/v1/health"
    : "http://localhost:3000/api/v1/health";
// Alternative for local check:
// const port = process.env.PORT || 3000;
// const healthCheckUrl = `http://localhost:${port}/api/v1/health`;

/**
 * Pings the health check endpoint and logs the result.
 */
export async function pingHealthEndpoint() {
  console.log(`[${getCurrentISODate()}] Running health check ping...`);
  try {
    const response = await axios.get(healthCheckUrl);
    console.log(
      `[${getCurrentISODate()}] Health check ping successful. Status: ${
        response.status
      }`
    );
  } catch (error) {
    // Type guard for Axios errors
    if (axios.isAxiosError(error)) {
      console.error(
        `[${getCurrentISODate()}] Health check ping failed: ${error.message}`,
        {
          status: error.response?.status,
          data: error.response?.data,
          code: error.code,
        }
      );
    } else if (error instanceof Error) {
      console.error(
        `[${getCurrentISODate()}] Health check ping failed with non-Axios error: ${
          error.message
        }`
      );
    } else {
      console.error(
        `[${getCurrentISODate()}] Health check ping failed with unknown error:`,
        error
      );
    }
  }
}

const health_check = (req: Request, res: Response): void => {
  res.json({
    Status: "OK 👍",
    Name: "Kenya API",
    Message: "Kasongo Must Go!",
    Version: "/api/v1/",
  });
  return;
};

// Routes
router.get("/", health_check);

export default router;
