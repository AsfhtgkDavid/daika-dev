import { useEffect, useState } from "react";

const useTypewriter = (text: string, speed: number = 0) => {
	const [displayText, setDisplayText] = useState("");
	const [done, setDone] = useState(false);

	useEffect(() => {
		const randomSpeed = () => {
			return Math.floor(Math.random() * 300) + 100;
		};

		let timeoutId: ReturnType<typeof setTimeout>;

		setDisplayText("");
		let i = 0;

		const typeNext = () => {
			if (i <= text.length) {
				setDisplayText(text.slice(0, i));
				i++;
				const delay = speed > 0 ? speed : randomSpeed();
				timeoutId = setTimeout(typeNext, delay);
			} else {
				setTimeout(() => setDone(true), 1000);
			}
		};

		timeoutId = setTimeout(typeNext, speed > 0 ? speed : randomSpeed());

		return () => clearTimeout(timeoutId);
	}, [text, speed]);

	return [displayText, done];
};

export default useTypewriter;
