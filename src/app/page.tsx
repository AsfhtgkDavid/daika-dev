import Links from "@/components/Links";
import logo from "@/assets/logo.svg";
import Typewriter from "@/components/Typewriter";

const Home = () => {
	return (
		<div className="flex items-center justify-center flex-col py-10">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={logo.src} alt="logo" className="mb-24" />
			<Typewriter headingText="Hi there, I'm David!" />
			<Links />
		</div>
	);
};

export default Home;
