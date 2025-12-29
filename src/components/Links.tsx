import DiscordIcon from "@/assets/discord-icon.svg";
import GitHubIcon from "@/assets/github-mark-white.svg";
import MailIcon from "@/assets/mail-icon.svg";
import PyPIIcon from "@/assets/pypi-logo.svg";
import CargoIcon from "/src/assets/cargo.png";
import ArchIcon from "@/assets/arch-logo.svg";
import CopyCard from "@/components/CopyCard.tsx";
import LinkCard from "@/components/LinkCard.tsx";
import { useIsMobile } from "@/hooks/useIsMobile.ts";

const Links = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
				<LinkCard
					title="GitHub"
					description="My GitHub profile: projects, open-source contributions, and repositories."
					href="https://github.com/AsfhtgkDavid"
					icon={GitHubIcon}
					className="md:col-span-full md:w-116"
					fullWidth={!useIsMobile()}
				/>
				<LinkCard
					title="PyPI"
					description="My PyPI profile: published packages, libraries, and tools."
					href="https://pypi.org/user/daika100/"
					icon={PyPIIcon}
				/>
				<LinkCard
					title="Crates"
					description="My published Rust crates and libraries."
					href="https://crates.io/users/AsfhtgkDavid"
					icon={CargoIcon}
				/>
				<div className="col-span-full flex justify-center">
					<LinkCard
						title="AUR"
						description="Packages I maintain for the Arch User Repository."
						href="https://aur.archlinux.org/account/AsfhtgkDavid"
						icon={ArchIcon}
					/>
				</div>
			</div>
			<hr className="h-6 w-full" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
				<LinkCard
					title="Mail"
					description="Email me for feedback, questions, or collaboration."
					href={"mailto:" + "david" + "@" + "daika" + "." + "dev"}
					icon={MailIcon}
					rotateAngle={360}
				/>
				<CopyCard
					title="Discord"
					description="Write me on Discord. Click to copy my tag."
					icon={DiscordIcon}
					textToCopy="daika100"
				/>
			</div>
		</div>
	);
};

export default Links;
