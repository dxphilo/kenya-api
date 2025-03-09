import env from '../env';

export function debug(message: string, ...args: unknown[]): void {
    if (env.debug) {
        console.log(message, ...args);
    }
}
