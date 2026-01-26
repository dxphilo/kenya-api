import { type Request, type Response, Router } from "express";
import { counties, type County } from "../public/counties";
import { createErrorResponse, createSuccessResponse } from "../utilities/error";

const router = Router();

const counties_data = (req: Request, res: Response): void => {
  const county_code_query = req.query.county_code;
  const county_code: number = parseInt(county_code_query as string, 10);

  if (!county_code_query) {
    res.status(200).json(createSuccessResponse(counties));
    return;
  }

  if (isNaN(county_code)) {
    const error_message = "Invalid County code";
    res.status(400).json(createErrorResponse(error_message));
    return;
  }

  const found_county: County | undefined = counties.find(
    (county) => county.code === county_code
  );

  if (found_county) {
    res.status(200).json(createSuccessResponse(found_county));
    return;
  }

  const error = `County with the code ${county_code} not found`;
  res.status(400).json(createErrorResponse(error));
  return;
};

// Routes
router.get("/", counties_data);

export default router;
