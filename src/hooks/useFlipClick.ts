import type React from "react";
import { useState } from "react";
import { ANIMATION_DURATION, type Direction } from "@/constants/flipClick";

export const useFlipClick = (
	action?: string | (() => void),
): [
	Direction,
	(
		e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
	) => void,
] => {
	const [clickDirection, setClickDirection] = useState<Direction>("0");

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();

		if (clickDirection !== "0" || !action) return;

		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();

		const x = e.clientX - rect.left;
		const centerX = rect.width / 2;

		setClickDirection(x < centerX ? "-1" : "1");

		setTimeout(() => {
			if (typeof action === "string") {
				window.open(action);
			} else if (typeof action === "function") {
				action();
			}
		}, ANIMATION_DURATION);
		setTimeout(() => {
			setClickDirection("0");
		}, ANIMATION_DURATION + 100);
	};
	return [clickDirection, handleClick];
};
