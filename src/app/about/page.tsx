import type { Metadata } from "next";
import Typewriter from "@/components/Typewriter";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
	title: "About",
};

const About = () => {
	return (
		<section id="about" className="flex flex-col items-center py-10">
			<Typewriter headingText="About Me" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-80 md:w-166">
				<Card
					title="Background & Goals"
					description="Currently a student passionate about Information Security and Rust. Aspiring to become a Systems Engineer or Backend Developer, focusing on secure and efficient code."
					className="w-80 md:w-166 h-fit md:col-span-2"
					fullWidth
				/>
				<Card
					title="Languages"
					description="I am proficient in Python, Rust, also have experience in Java and TypeScript."
					className="w-auto h-fit"
					fullWidth
				/>
				<Card
					title="Hobbies"
					description="In my free time, I enjoy gaming, reading tech blogs, exploring new technologies, and completing CTFs."
					className="w-auto h-fit"
					fullWidth
				/>
				<Card
					title="Skills"
					description="I have skills in software development, problem-solving, and a strong foundation in algorithms and data structures."
					className="w-auto h-fit"
					fullWidth
				/>
				<Card
					title="Security Research"
					description="Conducted a self-audit and was assigned a CVE ID (CVE-2025-69257) for a vulnerability discovered in my own software."
					className="w-auto h-fit rounded-xl"
					borderColor="border-red-700"
					fullWidth
				/>
				<div className="md:col-span-2 w-full flex justify-center">
					<Card
						title="Open Source"
						description="Active contributor. I maintain a package in the Arch User Repository (AUR)."
						className="w-80 h-fit"
						fullWidth
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
