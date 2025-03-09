import { Request, Response, Router } from "express";
import { towns } from "../public/towns";

const router = Router();

const towns_data = (req: Request, res: Response): void => {
  res.status(200).json({ towns: towns, count: towns.length, status: 200 });
  return;
};

// Routes
router.get("/", towns_data);

export default router;
