import type { CSSProperties } from "react";
import Tilt from "react-parallax-tilt";
import { ANIMATION_DURATION, type Direction } from "@/constants/flipClick.ts";
import { useFlipClick } from "@/hooks/useFlipClick.ts";
import { cn } from "@/lib/utils.ts";

const Card = (props: CardProps) => {
	const FLIP_STYLES: Record<Direction, CSSProperties> = {
		"-1": {
			transform: `perspective(1000px) rotateY(-${props.rotateAngle ? props.rotateAngle : 180}deg)`,
			pointerEvents: "none",
			transition: `all ${ANIMATION_DURATION}ms ease-in`,
		},
		"0": {},
		"1": {
			transform: `perspective(1000px) rotateY(${props.rotateAngle ? props.rotateAngle : 180}deg)`,
			pointerEvents: "none",
			transition: `all ${ANIMATION_DURATION}ms ease-in`,
		},
	};

	const [clickDirection, handleClick] = useFlipClick(
		props.href || props.onClick,
	);

	const isLink = !!props.href;
	const Tag = isLink ? "a" : "button";
	return (
		<Tag
			onClick={handleClick}
			href={props.href}
			className={cn("inline-block cursor-pointer", props.className)}
			style={{
				...FLIP_STYLES[clickDirection],
			}}
		>
			<Tilt tiltReverse>
				<div
					className={cn(
						"bg-gray-800 border-2 rounded-xl flex flex-col items-center justify-between hover:scale-[1.05]",
						props.fullWidth ? "w-full h-auto" : "w-54 h-80",
						props.borderColor
							? props.borderColor
							: "border-gray-700 hover:border-gray-500 ",
					)}
				>
					<h2
						className={cn(
							"font-bold m-4 text-gray-100 text-center",
							props.fullWidth ? "text-3xl" : "text-xl",
						)}
					>
						{props.title}
					</h2>
					{props.icon && (
						<img
							src={props.icon}
							className={cn("m-4", props.fullWidth ? "size-44" : "size-28")}
							alt={`${props.title} icon`}
						/>
					)}
					<p
						className={cn(
							"text-gray-300 m-4 text-justify [text-align-last:center]",
							props.fullWidth ? "text-xl" : "",
						)}
					>
						{props.description}
					</p>
				</div>
			</Tilt>
		</Tag>
	);
};

export default Card;

interface CardProps {
	title: string;
	description: string;
	icon?: string;
	href?: string;
	onClick?: () => void;
	rotateAngle?: number;

	className?: string;
	fullWidth?: boolean;

	borderColor?: string;
}
