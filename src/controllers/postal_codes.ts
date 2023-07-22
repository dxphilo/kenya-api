import { Request, Response, Router } from 'express';
import * as postalCode from '../public/postal_codes';

const router = Router();

async function postal_data(req: Request, res: Response) {
    await res.status(201).json({ postalCode, status: 201 });
}

// Routes
router.get('/', postal_data);

export default router;
