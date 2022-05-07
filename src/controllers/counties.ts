import { Request, Response, Router } from 'express';
import * as county from '../public/counties.json';

const router = Router();

function countyData(req: Request, res: Response) {
    res.json(county);
}

// Routes
router.get('/', countyData);

export default router;
