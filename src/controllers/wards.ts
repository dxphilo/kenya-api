import { Request, Response, Router } from "express";
import { wards, Ward } from "../public/wards";
import { createErrorResponse, createSuccessResponse } from "../utilities/error";

const router = Router();

const wards_data = (req: Request, res: Response): void => {
  const ward_code: string = req.query.code as string;

  if (ward_code) {
    const found_ward: Ward | undefined = wards.find(
      (ward) => ward.code === ward_code
    );

    if (found_ward) {
      res.status(200).json(createSuccessResponse(found_ward));
      return;
    }

    res
      .status(400)
      .json(createErrorResponse(`Ward with the code '${ward_code}' not found`));
    return;
  }

  res.status(201).json(createSuccessResponse(wards));
  return;
};

// Routes
router.get("/", wards_data);

export default router;
