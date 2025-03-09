import { NextFunction, Request, Response } from 'express';
import { debug } from '../utilities/debug';

export function loggingMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    debug(`${req.method}: ${req.originalUrl}`);
    next();
}
