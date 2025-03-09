import { Request, Response, Router } from "express";

const router = Router();

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
