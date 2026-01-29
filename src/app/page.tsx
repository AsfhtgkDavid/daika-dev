import Links from "@/components/Links";
import logo from "@/assets/logo.svg";
import Typewriter from "@/components/Typewriter";
import Image from "next/image";

const Home = () => {
	return (
		<div className="flex items-center justify-center flex-col py-10">
			<Image src={logo} alt="logo" className="mb-24" width={214.075} height={234.387} loading="eager"/>
			<Typewriter headingText="Hi there, I'm David!" />
			<Links />
		</div>
	);
};

export default Home;
