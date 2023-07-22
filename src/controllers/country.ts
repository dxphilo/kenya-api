import { Request, Response, Router } from 'express';
import * as countryInfo from '../public/country.json';

const router = Router();

function country_data(req: Request, res: Response) {
    return res.status(201).json({ countryInfo, status: 201 });
}

// Routes
router.get('/', country_data);

export default router;
