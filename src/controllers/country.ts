import { type Request, type Response, Router } from "express";
import * as countryInfo from "../public/country.json";
import { createSuccessResponse } from "../utilities/error";

const router = Router();

const country_data = (_req: Request, res: Response): void => {
	res.status(200).json(createSuccessResponse(countryInfo));
};

// Routes
router.get("/", country_data);

export default router;
