"use client";

import NavLink from "@/components/NavLink";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/useIsMobile";

const NavigationBar = () => {
	return (
		<NavigationMenu
			viewport={useIsMobile()}
			className="bg-gray-900 rounded-sm p-2"
		>
			<NavigationMenuList className="flex-wrap gap-4">
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<NavLink href="/">Home</NavLink>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<NavLink href="/about">About</NavLink>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default NavigationBar;
