import { Request, Response, Router } from "express";
import { publicUniversities, University } from "../public/universities";

const router = Router();

const universities_data = (req: Request, res: Response): void => {
  const name: string = req.query.name as string;

  if (name) {
    const found_university: University | undefined = publicUniversities.find(
      (u) => u.name.toLowerCase() === name.toLowerCase()
    );

    if (found_university) {
      res.status(200).json({ data: found_university, status: 200 });
      return;
    }
    res.status(400).json({
      error: `University with the name ${name} not found!`,
      status: 400,
    });
    return;
  }

  res.status(200).json({
    data: publicUniversities,
    count: publicUniversities.length,
    status: 200,
  });
  return;
};

// Routes
router.get("/", universities_data);

export default router;
