import env from '../env';

export function debug(message: string, ...args: any[]): void {
    if (env.debug) {
        console.log(message, ...args);
    }
}
