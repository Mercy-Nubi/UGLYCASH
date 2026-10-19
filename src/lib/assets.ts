import type { MouseEvent } from "react";

/** Resolve an image in /public/images so it works under any GitHub Pages path. */
export const img = (name: string): string => `${import.meta.env.BASE_URL}images/${name}`;

/** Placeholder links in the prototype ("#") should not jump the page. */
export const stop = (e: MouseEvent): void => e.preventDefault();
