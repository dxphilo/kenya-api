import { Request, Response, Router } from 'express';

const router = Router();

function helloWorld(req: Request, res: Response) {
    res.json({
        Data: 'Welcome to Kenya-API - API documenting information about beautiful country Kenya'
    });
}

// Routes
router.get('/', helloWorld);

export default router;
