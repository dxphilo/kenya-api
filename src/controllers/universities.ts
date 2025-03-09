import { NextFunction, Request, Response, Router } from 'express';
import { publicUniversities, University } from '../public/universities';

const router = Router();

async function universities_data(req: Request, res: Response, next:NextFunction):Promise<any>  {
try {
    const name: string = req.query.name as string;

    if (name) {
        const found_university: University | undefined =
            publicUniversities.find(
                (u) => u.name.toLowerCase() === name.toLowerCase()
            );

        if (found_university) {
            return res
                .status(200)
                .json({ data: found_university, status: 200 });
        }
        return res.status(400).json({
            error: `University with the name ${name} not found!`,
            status: 400
        });
    }

    return res.status(200).json({
        data: publicUniversities,
        count: publicUniversities.length,
        status: 200
    });
    
} catch (error) {
    next(error);
}
}

// Routes
router.get('/', universities_data);

export default router;
