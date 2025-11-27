import { Request, Response, Router } from "express";
import * as countryInfo from "../public/country.json";
import { createSuccessResponse } from "../utilities/error";

const router = Router();

const country_data = (req: Request, res: Response): void => {
  res.status(200).json(createSuccessResponse(countryInfo));
};

// Routes
router.get("/", country_data);

export default router;
