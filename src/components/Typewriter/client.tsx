"use client";

import {cn} from "@/lib/utils";
import styles from "@/styles/Typewriter.module.css";
import useTypewriter from "@/hooks/useTypewriter";
import {useIsClient} from "@/hooks/useIsClient";

const TypewriterClient = (props: TypewriterClientProps) => {
	const [text, done] = useTypewriter(props.text);
	const isMounted = useIsClient();

	return (
		<span
			aria-hidden="true"
			className={cn(
				"block min-h-[1.5em]",
				isMounted ? "opacity-100" : "opacity-0 typewriter-fallback",
				isMounted && !done ? styles.typing : "",
			)}
		>
			{isMounted ? text : props.text}
		</span>
	);
};

export default TypewriterClient;

interface TypewriterClientProps {
	text: string;
}
