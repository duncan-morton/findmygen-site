/**
 * Centralised "current year" so ages and "in {year}" labels stay accurate
 * automatically instead of being hardcoded. Import CURRENT_YEAR anywhere a
 * present-day reference is needed.
 */
export const CURRENT_YEAR = new Date().getFullYear()
