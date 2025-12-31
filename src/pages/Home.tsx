import Links from "@/components/Links.tsx";
import useTypewriter from "@/hooks/useTypewriter.ts";
import { cn } from "@/lib/utils.ts";
import logo from "@/assets/logo.svg";
import styles from "@/styles/Typewriter.module.css";

const Home = () => {
	const [text, done] = useTypewriter("Hi there, I'm David!");
	return (
		<div className="flex items-center justify-center flex-col py-10">
			<img src={logo} alt="logo" className="mb-24" />
			<h1
				className={cn(
					done ? "" : styles.typing,
					"text-4xl md:text-6xl text-center font-bold text-gray-100 relative inline-block",
				)}
			>
				{text}
			</h1>
			<Links />
		</div>
	);
};

export default Home;
