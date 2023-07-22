import { Request, Response, Router } from 'express';
import { counties, County } from '../public/counties';

const router = Router();

function county_data(req: Request, res: Response) {
    const county_code: number = parseInt(req.query.county_code as string, 10);

    if (!isNaN(county_code)) {
        const found_county: County | undefined = counties.find(
            (county) => county.code === county_code
        );

        if (found_county) {
            return res.status(200).json({ county: found_county, status: 200 });
        }
        return res.status(400).json({
            error: `County with the code ${county_code} not found`,
            status: 400
        });
    }

    return res.status(201).json({ counties: counties, status: 200 });
}

// Routes
router.get('/', county_data);

export default router;
