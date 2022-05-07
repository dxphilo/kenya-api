import { Request, Response, Router } from 'express';
import * as wards from '../public/wards.json';

const router = Router();

function wardsData(req: Request, res: Response) {
    res.status(201).json({ wards, status: 201 });
}

// Routes
router.get('/', wardsData);

export default router;
