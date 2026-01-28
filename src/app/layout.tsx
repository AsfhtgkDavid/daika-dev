import type { Metadata } from "next";
import InteractiveStrings from "@/components/InteractiveStrings";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import "./globals.css";
import Logo from "@/assets/logo.svg"

export const metadata: Metadata = {
	metadataBase: "https://daika.dev",
	title: {
		default: "David Lishchyshen",
		template: "David | %s"
	},
	description: "David Lishchyshen portfolio",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://daika.dev",
		title: "David Lishchyshen",
		images: [
			{
				url: Logo.u
			}
		]
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
