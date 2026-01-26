import React from "react";
import TypewriterClient from "./client";

export const TypewriterServer = (props: TypewriterServerProps) => {
	return (
		<h1 className="text-4xl md:text-6xl text-center font-bold text-gray-100 relative inline-block">
			<span className="sr-only">{props.headingText}</span>

			<TypewriterClient text={props.headingText} />
		</h1>
	);
};

interface TypewriterServerProps {
	headingText: string;
}
