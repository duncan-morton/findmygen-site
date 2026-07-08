/**
 * Single source of truth for the current year.
 *
 * Exposed as a function (not a frozen constant) so that statically generated
 * and ISR pages pick up the correct year whenever they regenerate, and client
 * components reflect the real year at render time. A module-level constant would
 * freeze at module-load and could serve a stale year after a year rollover on a
 * long-lived server instance.
 */
export function getCurrentYear() {
  return new Date().getFullYear()
}
