import { Request, Response, Router } from 'express';
import * as postalCode from '../public/postalcodes.json';

const router = Router();

function postalData(req: Request, res: Response) {
    res.send(postalCode);
}

// Routes
router.get('/', postalData);

export default router;
