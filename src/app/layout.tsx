import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InteractiveStrings from "@/components/InteractiveStrings";
import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import Logo from "@/assets/logo.svg";

export const metadata: Metadata = {
	metadataBase: new URL("https://daika.dev"),
	title: {
		default: "David Lishchyshen",
		template: "%s | David Lishchyshen",
	},
	description: "David Lishchyshen portfolio - Full Stack Developer",
	keywords: [
		"Python",
		"Rust",
		"Security Developer",
		"Web Developer",
		"David Lishchyshen",
	],
	authors: [{ name: "David Lishchyshen", url: "https://daika.dev" }],
	creator: "David Lishchyshen",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://daika.dev",
		title: "David Lishchyshen",
		description: "Personal portfolio of David Lishchyshen",
	},
	twitter: {
		card: "summary_large_image",
		title: "David Lishchyshen",
		description: "Personal portfolio of David Lishchyshen",
		images: [Logo.src],
	},
	alternates: {
		canonical: "/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex flex-col p-2 min-h-screen bg-gray-700">
				<noscript>
					<style>{`
					.typewriter-fallback { opacity: 1 !important; }
				`}</style>
				</noscript>
				<InteractiveStrings />
				<NavigationBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
