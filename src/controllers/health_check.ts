import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

async function health_check(req: Request, res: Response,next:NextFunction):Promise<any>  {
try {
    return res.json({
        status: 'ok 👍 ',
        message: 'Kasongo Must Go!'
    });
} catch (error) {
    next(error);
}
}

// Routes
router.get('/', health_check);

export default router;
