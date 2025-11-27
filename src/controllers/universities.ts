import { Request, Response, Router } from "express";
import { publicUniversities, University } from "../public/universities";
import { createErrorResponse, createSuccessResponse } from "../utilities/error";

const router = Router();

const universities_data = (req: Request, res: Response): void => {
  const university_name = req.query.name;
  const name: string = university_name as string;

  if (!university_name) {
    res.status(200).json(createSuccessResponse(publicUniversities));
    return;
  }

  const found_university: University | undefined = publicUniversities.find(
    (u) => u.name.toLowerCase() === name.toLowerCase()
  );

  if (found_university) {
    res.status(200).json(createSuccessResponse(found_university));
    return;
  }

  res
    .status(400)
    .json(createErrorResponse(`University with the name ${name} not found!`));
  return;
};

// Routes
router.get("/", universities_data);

export default router;
