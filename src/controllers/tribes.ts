import { Request, Response, Router } from 'express';
import { tribes, Tribe } from '../public/tribes';

const router = Router();

function tribes_data(req: Request, res: Response) {
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
}

// Routes
router.get('/', tribes_data);

export default router;
