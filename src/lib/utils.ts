import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const distToSegment = (
	px: number,
	py: number,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
): number => {
	const l2 = (x1 - x2) ** 2 + (y1 - y2) ** 2;
	if (l2 === 0) return Math.hypot(px - x1, py - y1);

	let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
	t = Math.max(0, Math.min(1, t));

	return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
};
