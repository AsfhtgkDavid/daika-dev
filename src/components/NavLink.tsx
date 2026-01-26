"use client";

import type { UrlObject } from "node:url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Url = string | UrlObject;

const NavLink = (props: NavLinkProps) => {
	const path = usePathname();
	const pathStr = path?.toString() || "";
	const hrefStr =
		typeof props.href === "string" ? props.href : props.href.pathname || "";
	const isActive = pathStr === hrefStr;
	return (
		<Link
			href={props.href}
			aria-current={isActive ? "page" : false}
			className={cn(
				"flex h-full w-full items-center gap-1.5 rounded-xl border-2 p-3 text-sm transition-all outline-none",
				"focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-1",
				"[&_svg:not([class*='size-'])]:size-4",
				!isActive &&
					"border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-200 hover:text-gray-800",
				isActive && "bg-gray-100 text-gray-800 scale-110 border-gray-100",
			)}
		>
			{props.children}
		</Link>
	);
};

export default NavLink;

interface NavLinkProps {
	href: Url;

	children?: React.ReactNode;
}
