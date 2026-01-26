import { type Request, type Response, Router } from "express";
import { publicHospitals, type PublicHospital } from "../public/hospitals";
import { createErrorResponse, createSuccessResponse } from "../utilities/error";

const router = Router();

const hospitals_data = (req: Request, res: Response): void => {
  const hospital_name_query = req.query.name;
  const hospital: string = hospital_name_query as string;

  if (!hospital_name_query) {
    res.status(200).json(createSuccessResponse(publicHospitals));
    return;
  }

  if (hospital) {
    const found_hospital: PublicHospital | undefined = publicHospitals.find(
      (u) => u.name.toLowerCase() === hospital.toLowerCase()
    );

    if (found_hospital) {
      res.status(200).json(createSuccessResponse(found_hospital));
      return;
    }

    res
      .status(400)
      .json(
        createErrorResponse(`Hospital with the name '${hospital}' not found!`)
      );
    return;
  }
};

// Routes
router.get("/", hospitals_data);

export default router;
