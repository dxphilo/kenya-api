import { Request, Response, Router } from "express";
import { counties, County } from "../public/counties";

const router = Router();

const county_data = (req: Request, res: Response): void => {
  const county_code: number = parseInt(req.query.county_code as string, 10);

  if (isNaN(county_code)) {
    res.status(400).json({
      error: "County code Invalid or missing county code",
      status: 400,
    });
    return;
  }

  const found_county: County | undefined = counties.find(
    (county) => county.code === county_code
  );

  if (found_county) {
    res.status(200).json({ county: found_county, status: 200 });
    return;
  }
  res.status(400).json({
    error: `County with the code ${county_code} not found`,
    status: 400,
  });
  return;
};

// Routes
router.get("/", county_data);

export default router;
