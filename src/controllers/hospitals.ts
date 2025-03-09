import { Request, Response, Router } from "express";
import { publicHospitals, PublicHospital } from "../public/hospitals";

const router = Router();

const hospitals_data = (req: Request, res: Response): void => {
  const hospital: string = req.query.name as string;

  if (hospital) {
    const found_hospital: PublicHospital | undefined = publicHospitals.find(
      (u) => u.name.toLowerCase() === hospital.toLowerCase()
    );

    if (found_hospital) {
      res.status(200).json({ data: found_hospital, status: 200 });
      return;
    }
    res.status(400).json({
      error: `Hospital with the name ${hospital} not found!`,
      status: 400,
    });
    return;
  }

  res.status(200).json({
    data: publicHospitals,
    count: publicHospitals.length,
    status: 200,
  });
  return;
};

// Routes
router.get("/", hospitals_data);

export default router;
