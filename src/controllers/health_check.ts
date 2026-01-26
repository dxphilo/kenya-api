import { type Request, type Response, Router } from "express";
import axios from "axios";
import { getCurrentISODate } from "../utilities/util";

const router = Router();

export const healthCheckUrl =
  process.env.NODE_ENV === "production"
    ? "https://kenya-api.onrender.com/api/v1/health"
    : "http://localhost:3000/api/v1/health";

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
const health_check = (_req: Request, res: Response): void => {
  res.json({
    Status: "OK 👍",
    Name: "Kenya API",
    Version: "/api/v1/",
    Message: "Kasongo Must Go!",
  });
  return;
};

// Routes
router.get("/", health_check);

export default router;
