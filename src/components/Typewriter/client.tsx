"use client";

import { cn } from "@/lib/utils";
import styles from "@/styles/Typewriter.module.css";
import React from "react";
import useTypewriter from "@/hooks/useTypewriter";

const TypewriterClient = (props: TypewriterClientProps) => {
	const [text, done] = useTypewriter(props.text);
	return (
		<span
			aria-hidden="true"
			className={cn("block min-h-[1.5em]", done ? "" : styles.typing)}
		>
			{text}
		</span>
	);
};

export default TypewriterClient;

interface TypewriterClientProps {
	text: string;
}
