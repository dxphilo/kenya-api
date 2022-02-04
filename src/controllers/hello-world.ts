import { Request, Response, Router } from 'express';

const router = Router();

function helloWorld(req: Request, res: Response) {
    res.json({
        data: 'Welcome to Kenya-API'
    });
}

// Routes
router.get('/', helloWorld);

export default router;
