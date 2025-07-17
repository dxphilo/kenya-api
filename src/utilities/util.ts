/**
 * Creates a new ISO 8601 formatted date string for the current time.
 * @returns ISO 8601 formatted string (e.g., '2025-07-17T22:53:00.000Z')
 */
export const getCurrentISODate = (): string => new Date().toISOString();
