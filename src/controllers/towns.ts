import { Request, Response, Router } from 'express';
import { towns } from '../public/towns';

const router = Router();

async function towns_data(req: Request, res: Response):Promise<any>  {
    return res
        .status(200)
        .json({ towns: towns, count: towns.length, status: 200 });
}

// Routes
router.get('/', towns_data);

export default router;
