import { Request, Response, Router } from 'express';
import { wards, Ward } from '../public/wards';

const router = Router();

async function wards_data(req: Request, res: Response) {
    const ward_code: string = req.query.ward_code as string;
    if (ward_code) {
        const found_ward: Ward | undefined = wards.find(
            (ward) => ward.code === ward_code
        );

        if (found_ward) {
            return res.status(200).json({ ward: found_ward, status: 200 });
        }
        return res.status(400).json({
            error: `Ward with the code ${ward_code} not found`,
            status: 400
        });
    }

    return res.status(201).json({ wards, status: 200 });
}

// Routes
router.get('/', wards_data);

export default router;
