import { Request, Response, Router } from 'express';
import * as postalCode from '../public/postalcodes.json';

const router = Router();

function postalData(req: Request, res: Response) {
    res.status(201).json({ postalCode, status: 201 });
}

// Routes
router.get('/', postalData);

export default router;
