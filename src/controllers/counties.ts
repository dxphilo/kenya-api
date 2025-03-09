import { NextFunction, Request, Response, Router } from 'express';
import { counties, County } from '../public/counties';

const router = Router();

async function county_data(req: Request, res: Response,next:NextFunction):Promise<any> {
try {
    const county_code: number = parseInt(req.query.county_code as string, 10);

    if (isNaN(county_code)) {
        return res.status(400).json({
            error: 'County code Invalid or missing county code',
            status: 400
        });
    }

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
} catch (error) {
    next(error);
}
}

// Routes
router.get('/', county_data);

export default router;
