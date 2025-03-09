import { NextFunction, Request, Response, Router } from 'express';
import { tribes, Tribe } from '../public/tribes';

const router = Router();

async function tribes_data(req: Request, res: Response,next:NextFunction):Promise<any>  {
try {
    const tribe: string = req.query.name as string;

    if (tribe) {
        const found_tribe: Tribe | undefined = tribes.find(
            (u) => u.name.toLowerCase() === tribe.toLowerCase()
        );

        if (found_tribe) {
            return res.status(200).json({ data: found_tribe, status: 200 });
        }
        return res.status(400).json({
            error: `Tribe with the name ${tribe} not found!`,
            status: 400
        });
    }

    return res
        .status(200)
        .json({ data: tribes, count: tribes.length, status: 200 });
} catch (error) {
    next(error);
}
}

// Routes
router.get('/', tribes_data);

export default router;
