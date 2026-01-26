import type { NextFunction, Request, Response } from 'express';
import { debug } from '../utilities/debug';

export function loggingMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    debug(`${req.method}: ${req.originalUrl}`);
    next();
}
