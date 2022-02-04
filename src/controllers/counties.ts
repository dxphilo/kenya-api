import { Request, Response, Router } from 'express';
import * as county from '../public/counties.json';

const router = Router();

function countyData(req: Request, res: Response) {
    res.send(county);
}

// Routes
router.get('/', countyData);

export default router;
