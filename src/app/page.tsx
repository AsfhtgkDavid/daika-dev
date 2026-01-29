import Logo from "@/assets/logo.svg";
import Links from "@/components/Links";
import Typewriter from "@/components/Typewriter";

const Home = () => {
	return (
		<div className="flex items-center justify-center flex-col py-10">
			<Logo />
			<Typewriter headingText="Hi there, I'm David!" />
			<Links />
		</div>
	);
};

export default Home;
