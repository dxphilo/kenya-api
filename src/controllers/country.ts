import { Request, Response, Router } from 'express';
import * as countryInfo from '../public/countrydetails.json';

const router = Router();

function countryData(req: Request, res: Response) {
    res.send(countryInfo);
}

// Routes
router.get('/', countryData);

export default router;
