import { Request, Response, Router } from 'express';

const router = Router();

function health_check(req: Request, res: Response) {
    return res.json({
        status: 'ok 👍 ',
        message: 'Kasongo Must Go!'
    });
}

// Routes
router.get('/', health_check);

export default router;
