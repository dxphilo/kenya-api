import { type Request, type Response, Router } from "express";
import { towns } from "../public/towns";
import { createSuccessResponse } from "../utilities/error";

const router = Router();

const towns_data = (_req: Request, res: Response): void => {
  res.status(200).json(createSuccessResponse(towns));
  return;
};

// Routes
router.get("/", towns_data);

export default router;
