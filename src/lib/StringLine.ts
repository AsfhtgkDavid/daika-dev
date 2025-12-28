import {
	color,
	friction,
	lineWidth,
	tension,
} from "@/constants/interactiveStrings.ts";

export class StringLine {
	startX: number;
	startY: number;
	endX: number;
	endY: number;

	cx: number;
	cy: number;

	restCx: number;
	restCy: number;

	vx: number = 0;
	vy: number = 0;

	constructor(startX: number, startY: number, endX: number, endY: number) {
		this.startX = startX;
		this.startY = startY;
		this.endX = endX;
		this.endY = endY;

		this.restCx = (startX + endX) / 2;
		this.restCy = (startY + endY) / 2;
		this.cx = this.restCx;
		this.cy = this.restCy;
	}

	update(mouse: { x: number; y: number }, isActive: boolean) {
		let targetCx = this.restCx;
		let targetCy = this.restCy;

		if (isActive) {
			targetCx = mouse.x;
			targetCy = mouse.y;
		}

		const forceX = (targetCx - this.cx) * tension;
		const forceY = (targetCy - this.cy) * tension;

		this.vx += forceX;
		this.vy += forceY;

		this.vx *= friction;
		this.vy *= friction;

		this.cx += this.vx;
		this.cy += this.vy;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.moveTo(this.startX, this.startY);

		ctx.quadraticCurveTo(this.cx, this.cy, this.endX, this.endY);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;
		ctx.stroke();
	}
}
