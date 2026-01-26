"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = (props: NavLinkProps) => {
	const path = usePathname();
	return (
		<Link
			href={props.href}
			aria-current={path === props.href ? "page" : false}
			className="focus-visible:ring-ring/50 flex items-center gap-1.5 rounded-xl p-3 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 h-full w-full border-2 border-gray-700 text-gray-100 bg-gray-800 hover:bg-gray-200 hover:text-gray-800 aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-800 aria-[current=page]:scale-125 active"
		>
			{props.children}
		</Link>
	);
};

export default NavLink;

interface NavLinkProps {
	href: string;

	children?: React.ReactNode;
}
