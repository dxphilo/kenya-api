import { NextFunction, Request, Response, Router } from 'express';
import * as countryInfo from '../public/country.json';

const router = Router();

async function country_data(req: Request, res: Response,next:NextFunction):Promise<any>  {
try {
    return res.status(201).json({ countryInfo, status: 201 });
} catch (error) {
    next(error);
}
}

// Routes
router.get('/', country_data);

export default router;
