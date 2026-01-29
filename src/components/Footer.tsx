import GitHubLogo from "@/assets/github-mark-white.svg";
import Image from "next/image";

const Footer = () => {
	const startYear = 2025;
	const currentYear = new Date().getFullYear();
	const yearDisplay =
		startYear === currentYear
			? `${startYear}`
			: `${startYear} - ${currentYear}`;
	return (
		<footer className="bg-gray-800 rounded-sm p-2 text-gray-100 text-sm md:text-base flex justify-between items-center gap-2 pl-4 pr-4">
			<div>
				&copy; {yearDisplay} David Lishchyshen. Source code under{" "}
				<a
					href="http://github.com/AsfhtgkDavid/daika-dev/LICENSE"
					className="underline underline-offset-2"
				>
					MIT
				</a>
				. Content under{" "}
				<a
					href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline underline-offset-2"
				>
					CC BY-NC-SA 4.0
				</a>
				.
			</div>
			<a href="https://github.com/AsfhtgkDavid/daika-dev/" className="shrink-0">
				<Image
					src={GitHubLogo}
					alt="GitHub logo"
					width={24}
					height={24}
					className="size-6"
				/>
			</a>
		</footer>
	);
};

export default Footer;
