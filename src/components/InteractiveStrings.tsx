"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { StringLine } from "@/lib/StringLine";
import {
	grabRadius,
	releaseRadius,
	slantAmount,
	stringSpacing,
} from "@/constants/interactiveStrings";
import { distToSegment } from "@/lib/utils";

const InteractiveStrings = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const state = useRef({
		mouse: { x: -1000, y: -1000 },
		strings: [] as StringLine[],
		activeStringIndex: null as number | null,
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationId: number;

		const initStrings = () => {
			const { width, height } = state.current;
			state.current.strings = [];

			const totalStrings = Math.ceil(width / stringSpacing) + 5;

			for (let i = -3; i < totalStrings; i++) {
				const xOffset = i * stringSpacing;
				state.current.strings.push(
					new StringLine(xOffset, 0, xOffset + slantAmount, height),
				);
			}
		};

		const handleResize = () => {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();

			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;

			ctx.scale(dpr, dpr);

			state.current.width = rect.width;
			state.current.height = rect.height;

			initStrings();
		};

		const updateInteraction = () => {
			const { mouse, strings, activeStringIndex } = state.current;
			let newActiveIndex = activeStringIndex;

			let closestIndex = -1;

			for (let i = 0; i < strings.length; i++) {
				const str = strings[i];
				const dist = distToSegment(
					mouse.x,
					mouse.y,
					str.startX,
					str.startY,
					str.endX,
					str.endY,
				);

				if (dist < grabRadius) {
					closestIndex = i;
					break;
				}
			}

			if (closestIndex !== -1) {
				newActiveIndex = closestIndex;
			}

			if (activeStringIndex !== null) {
				const activeStr = strings[activeStringIndex];
				const dist = distToSegment(
					mouse.x,
					mouse.y,
					activeStr.startX,
					activeStr.startY,
					activeStr.endX,
					activeStr.endY,
				);

				if (dist > releaseRadius) {
					newActiveIndex = null;
				}
			}

			state.current.activeStringIndex = newActiveIndex;
		};

		const animate = () => {
			const { width, height, strings, activeStringIndex, mouse } =
				state.current;

			ctx.clearRect(0, 0, width, height);

			updateInteraction();

			strings.forEach((str, index) => {
				const isActive = index === activeStringIndex;
				str.update(mouse, isActive);
				str.draw(ctx);
			});

			animationId = requestAnimationFrame(animate);
		};

		const onMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			state.current.mouse.x = e.clientX - rect.left;
			state.current.mouse.y = e.clientY - rect.top;
		};

		const onMouseLeave = () => {
			state.current.mouse.x = -10000;
			state.current.mouse.y = -10000;
			state.current.activeStringIndex = null;
		};

		handleResize();
		animate();

		window.addEventListener("resize", handleResize);
		window.addEventListener("mousemove", onMouseMove);
		canvas.addEventListener("mouseleave", onMouseLeave);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("mousemove", onMouseMove);
			canvas.removeEventListener("mouseleave", onMouseLeave);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-auto block touch-none"
		/>
	);
};

export default InteractiveStrings;
