/**
 * PenNews / supersourcing.com/blog theme parity for images and page chrome.
 * Matches global reset: img { margin:0; padding:0; border:0; outline:0;
 * vertical-align:baseline; background:transparent; } plus max-width:100%.
 * `display:block` avoids the common inline-img gap under thumbnails.
 */
export const penNewsImgReset =
  "m-0 max-w-full border-0 bg-transparent p-0 outline-none [vertical-align:baseline]";

export const penNewsImgDisplayBlock = `${penNewsImgReset} block`;

/** body { overflow-x:hidden; word-wrap:break-word; -moz-osx-font-smoothing } */
export const penNewsBodyLike =
  "overflow-x-hidden break-words [-moz-osx-font-smoothing:grayscale]";

/** Equal inset wrapper for fill images with explicit bounds. */
export const blogArtInsetClass = "absolute inset-2.5 sm:inset-3.5";
