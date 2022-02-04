import { Request, Response, Router } from 'express';
import * as wards from '../public/wards.json';

const router = Router();

function wardsData(req: Request, res: Response) {
    res.send(wards);
}

// Routes
router.get('/', wardsData);

export default router;
