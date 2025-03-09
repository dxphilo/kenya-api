import { Request, Response, Router } from 'express';
import * as countryInfo from '../public/country.json';

const router = Router();

const country_data = (req: Request, res: Response): void => {
    res.status(200).json({ countryInfo, status: 200 });
}

// Routes
router.get('/', country_data);

export default router;
