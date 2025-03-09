import { Request, Response, Router } from "express";
import { postal_stations, PostalCode } from "../public/postal_codes";

const router = Router();

const postal_data = (req: Request, res: Response): void => {
  const postal_code: number = parseInt(req.query.post_code as string, 10);

  if (!isNaN(postal_code)) {
    const found_post: PostalCode | undefined = postal_stations.find(
      (post) => post.code === postal_code
    );

    if (found_post) {
      res.status(200).json({ post: found_post, status: 200 });
      return;
    }

    res.status(400).json({
      error: `Post station with the code ${postal_code} not found`,
      status: 400,
    });
    return;
  }

  res.status(200).json({ postal_stations: postal_stations, status: 200 });
  return;
};

// Routes
router.get("/", postal_data);

export default router;
