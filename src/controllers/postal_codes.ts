import { Request, Response, Router } from 'express';
import * as postalCode from '../public/postal_codes';

const router = Router();

function postal_data(req: Request, res: Response) {
    return res.status(200).json({ postalCode, status: 200 });
}

// Routes
router.get('/', postal_data);

export default router;
