import { Request, Response, Router } from 'express';
import * as countryInfo from '../public/countrydetails.json';

const router = Router();

function countryData(req: Request, res: Response) {
    res.status(201).json({ countryInfo, status: 201 });
}

// Routes
router.get('/', countryData);

export default router;
