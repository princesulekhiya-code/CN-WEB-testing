let lockCount = 0;
let savedOverflow = "";

/**
 * Nestable scroll lock for full-screen overlays (splash, modals).
 * Multiple concurrent locks restore overflow only when the last releases.
 */
export function acquireBodyScrollLock(): () => void {
  if (typeof document === "undefined") {
    return () => {};
  }

  if (lockCount === 0) {
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  lockCount += 1;

  return () => {
    lockCount -= 1;
    if (lockCount <= 0) {
      lockCount = 0;
      document.body.style.overflow = savedOverflow;
    }
  };
}
