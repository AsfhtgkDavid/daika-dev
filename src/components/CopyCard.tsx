"use client";

import React from "react";
import Card from "@/components/ui/Card";
import {cn} from "@/lib/utils";

const CopyCard = (props: CopyCardProps) => {
	const [showTooltip, setShowTooltip] = React.useState(false);
	const handleClick = () => {
		navigator.clipboard.writeText(props.textToCopy).then(() => {
			setShowTooltip(true);
			setTimeout(() => {
				setShowTooltip(false);
			}, 2000);
		});
	};
	return (
		<div className={cn("relative inline-block", props.className)}>
			<Card
				title={props.title}
				description={props.description}
				icon={props.icon}
				onClick={handleClick}
				rotateAngle={360}
			/>
			{showTooltip && (
				<div
					className="absolute -top-10 left-1/2 transform -translate-x-1/2
            bg-black/90 text-white text-sm py-1 px-3 rounded shadow-lg 
            transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap
            "
				>
					Copied!
					<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
				</div>
			)}
		</div>
	);
};

export default CopyCard;

interface CopyCardProps {
	title: string;
	description: string;
	icon: string;
	textToCopy: string;
	className?: string;
}
