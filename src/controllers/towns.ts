import { Request, Response, Router } from 'express';
import { towns } from '../public/towns';

const router = Router();

function towns_data(req: Request, res: Response) {
    return res
        .status(200)
        .json({ towns: towns, count: towns.length, status: 200 });
}

// Routes
router.get('/', towns_data);

export default router;
